import { getOneDiaryDateById, updateDiaryDateById } from "../services/dateAPI";
import { calculateTotalFoodMacros } from "../utils/calculateMacros";

export const useAddFood = (food, dateId, mealType) => {
    const initialFoodValues = {
        objectId: food.objectId,
        protein: food.protein,
        name: food.name,
        calories: food.calories,
        carbs: food.carbs,
        fat: food.fat,
        servings: 1
    };

    const addFood = async (foodValues) => {
        if (foodValues.servings <= 0) {
            throw new Error('Servings should be a positive number');
        }

        const diary = await getOneDiaryDateById(dateId);

        if (!diary[mealType]) {
            diary[mealType] = [];
        }

        const calculatedFoodMacros = calculateTotalFoodMacros(foodValues);

        diary[mealType] = [...diary[mealType], calculatedFoodMacros];

        return await updateDiaryDateById(dateId, { [mealType]: diary[mealType] });
    }

    return {
        initialFoodValues,
        addFood
    }
}