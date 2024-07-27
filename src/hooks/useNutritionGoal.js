import { useState } from "react";
import { calculateCalories } from "../utils/calculateCaloreis";

export const useNutritionGoal = () => {
    const [isShown, setIsShown] = useState(false);
    const [nutritionGoal, setNutritionGoal] = useState({});

    const changeNutritionGoal = (values) => {
        const newNutritionGoal = calculateCalories(values);
        setNutritionGoal(newNutritionGoal);
        setIsShown(true);
    }

    return {
        isShown,
        nutritionGoal,
        changeNutritionGoal,
    }
}