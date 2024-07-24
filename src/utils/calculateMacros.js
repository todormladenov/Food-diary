export default function calculateMacros(foods) {
    const totalMacros = { calories: 0, carbs: 0, fat: 0, protein: 0 };

    foods?.reduce((a, f) => {
        a.calories += f.calories;
        a.carbs += f.carbs;
        a.fat += f.fat;
        a.protein += f.protein;

        return a
    }, totalMacros);

    return totalMacros;
}