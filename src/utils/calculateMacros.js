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
        protein: protein * servings,
        name,
        calories: calories * servings,
        carbs: carbs * servings,
        fat: fat * servings,
        servings
    };
}