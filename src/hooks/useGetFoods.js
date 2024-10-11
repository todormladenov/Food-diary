import { useContext, useEffect, useReducer, useState } from "react"
import { getCreatedFoods, searchFoods } from "../services/foodAPI";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackbarContext";

function foodsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.foods;
        case 'DELETE_ONE':
            return state.filter(food => food.objectId !== action.foodId);
        default:
            return state;
    }
}

export const useGetFoods = () => {
    const [foods, dispatch] = useReducer(foodsReducer, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState(null);
    const navigator = useNavigate();

    const snackbar = useContext(SnackbarContext);

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        (async () => {
            try {
                const skip = (currentPage - 1) * ITEMS_PER_PAGE;

                const { results, count } = searchQuery
                    ? await searchFoods(searchQuery, ITEMS_PER_PAGE, skip)
                    : await getCreatedFoods(ITEMS_PER_PAGE, skip);
                                                                        
                dispatch({ type: 'GET_ALL', foods: results });
                setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));
            } catch (error) {
                navigator('/');
                snackbar.showSnackbar(error.message);
            }
        })()
    }, [currentPage, searchQuery]);

    const changeFoods = (type, foodId) => {
        dispatch({ type: type, foodId });
    }

    const changeSearchQuery = (query) => {
        setSearchQuery(oldQuery => ({ ...oldQuery, ...query }));
        setCurrentPage(1);
    }

    return {
        foods,
        changeFoods,
        currentPage,
        setCurrentPage,
        totalPages,
        changeSearchQuery
    }
}