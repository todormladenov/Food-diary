import { useContext, useEffect, useReducer } from "react"
import { getUsersCreatedFoods } from "../services/foodAPI";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackbarContext";

function foodsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.foods;
        case 'DELETE_ONE':
            return action.filter(food => food.ojectId !== action.ojectIdToDelete);
        default:
            return state;
    }
}

export const useGetFoods = () => {
    const [foods, dispatch] = useReducer(foodsReducer, []);
    const navigator = useNavigate();

    const { userId } = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);

    useEffect(() => {
        (async () => {
            try {
                const foods = await getUsersCreatedFoods(userId);
                dispatch({ type: 'GET_ALL', foods: foods.results });
            } catch (error) {
                navigator('/');
                snackbar.showSnackbar(error.message);
            }
        })()
    }, []);

    const changeFoods = (type) => {
        dispatch({ type, foods });
    }

    return {
        foods,
        changeFoods
    }
}