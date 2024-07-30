export const calculateCalories = (values) => {
    const { weight, height, age, activity, goal } = values;

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
    
    if (!weight || weight <= 0 || isNaN(weight)) {
        throw new Error('Invalid weight')
    }
    if (!height || height <= 0 || isNaN(height)) {
        throw new Error('Invalid height')
    }
    if (!age || age <= 0 || isNaN(age)) {
        throw new Error('Invalid age')
    }
    
    if (!activityMultipliers[activity] || !goalAdjustments[goal]) {
        throw new Error('Invalid data')
    }    
    
    const BMR = 10 * weight + 6.25 * height - 5 * age + 5;

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