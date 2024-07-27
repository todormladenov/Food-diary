export const calculateCalories = (values) => {
    const { weight, height, age, activity, goal } = values;

    const BMR = 10 * weight + 6.25 * height - 5 * age + 5;

    const activityMultipliers = {
        little: 1.2,
        lite: 1.375,
        moderate: 1.55,
        active: 1.725
    };

    const goalAdjustments = {
        maintain: 0,
        loss: -500,
        gain: 300
    };

    const dailyCalories = (BMR * activityMultipliers[activity]) + goalAdjustments[goal];

    const proteinGrams = 2 * weight;
    const fatCalories = (dailyCalories * 0.3)
    
    const proteinCalories = proteinGrams * 4;
    const fatGrams = fatCalories / 9;

    const carbsCalories = dailyCalories - (proteinCalories + fatCalories);
    const carbsGrams = carbsCalories / 4;

    return {
        calories: Math.round(dailyCalories),
        carbs: Math.round(carbsGrams),
        protein: Math.round(proteinGrams),
        fat: Math.round(fatGrams)
    };
}