import { useContext, useEffect, useState } from "react"
import { getFoodById } from "../services/foodAPI";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useGetOneFood = (foodId) => {
    const [food, setFood] = useState({});
    const snackbar = useContext(SnackbarContext);
    const navigator = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const food = await getFoodById(foodId);
                setFood(food);
            } catch (error) {
                snackbar.showSnackbar(error.message);
                navigator('/my-created-foods');
            }
        })()
    }, [foodId]);

    return { food }
}