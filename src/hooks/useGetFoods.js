import { useContext, useEffect, useReducer, useState } from "react"
import { getCreatedFoods, searchFoods } from "../services/foodAPI";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackbarContext";

function foodsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return {
                ...state,
                foods: action.foods
            }
        case 'DELETE_ONE':
            return {
                ...state,
                foods: state.foods.filter(food => food.objectId !== action.foodId)
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_PAGES':
            return {
                ...state,
                totalPages: action.totalPages
            }
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: { ...state.searchQuery, ...action.searchQuery },
                currentPage: 1
            }
        default:
            return state;
    }
}

const initialState = {
    foods: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
    searchQuery: null,
}

export const useGetFoods = () => {
    const [foods, dispatch] = useReducer(foodsReducer, initialState);
    const navigator = useNavigate();

    const snackbar = useContext(SnackbarContext);

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        (async () => {
            try {
                dispatch({ type: 'SET_LOADING', isLoading: true });

                const skip = (foods.currentPage - 1) * ITEMS_PER_PAGE;

                const { results, count } = foods.searchQuery
                    ? await searchFoods(foods.searchQuery, ITEMS_PER_PAGE, skip)
                    : await getCreatedFoods(ITEMS_PER_PAGE, skip);

                dispatch({ type: 'GET_ALL', foods: results, });
                dispatch({ type: 'SET_TOTAL_PAGES', totalPages: Math.ceil(count / ITEMS_PER_PAGE) });
            } catch (error) {
                navigator('/');
                snackbar.showSnackbar(error.message);
            } finally {
                dispatch({ type: 'SET_LOADING', isLoading: false });
            }
        })()
    }, [foods.currentPage, foods.searchQuery]);

    const changeFoods = (type, foodId) => {
        dispatch({ type: type, foodId });
    }

    const changeSearchQuery = (searchQuery) => {
        dispatch({ type: 'SET_SEARCH_QUERY', searchQuery });
        setCurrentPage(1);
    }

    const setCurrentPage = (page) => {
        dispatch({ type: 'SET_CURRENT_PAGE', currentPage: page });
    }

    return {
        foodsList: foods.foods,
        isLoading: foods.isLoading,
        currentPage: foods.currentPage,
        totalPages: foods.totalPages,
        changeFoods,
        setCurrentPage,
        changeSearchQuery,
    }
}