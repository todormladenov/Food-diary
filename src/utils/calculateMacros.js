export function calculateTotalMealMacros(foods) {
    return foods?.reduce((a, { calories, carbs, fat, protein }) => ({
        calories: a.calories + calories,
        carbs: a.carbs + carbs,
        fat: a.fat + fat,
        protein: a.protein + protein,
    }), { calories: 0, carbs: 0, fat: 0, protein: 0 });
}

export function calculateTotalFoodMacros(foodValues) {
    const { objectId, protein, name, calories, carbs, fat, servings } = foodValues;

    return {
        objectId,
        protein: Math.round(protein * servings),
        name,
        calories: Math.round(calories * servings),
        carbs: Math.round(carbs * servings),
        fat: Math.round(fat * servings),
        servings
    };
}