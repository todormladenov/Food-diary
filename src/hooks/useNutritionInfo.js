import { useState } from "react"

export const useNutritionInfo = () => {
    const [isShown, setIsShown] = useState(false);

    const showNutritionInfo = () => {
        setIsShown(true);
    }

    const hideNutritionInfo = () => {
        setIsShown(false);
    }

    return {
        isShown,
        showNutritionInfo,
        hideNutritionInfo
    }
}