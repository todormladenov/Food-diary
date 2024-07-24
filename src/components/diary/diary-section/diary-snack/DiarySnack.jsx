import DiaryMealBottomRow from "../diary-meal-bottom-row/DiaryMealBottomRow";
import DiaryMealFoodRow from "../diary-meal-food-row/DiaryMealFoodRow";
import DiaryMealTopRow from "../diary-meal-top-row/DiaryMealTopRow";

export default function DiarySnack({ snack }) {
    const mealType = 'Snack';

    return (
        <>
            <DiaryMealTopRow mealType={mealType} />

            {snack.map((food, i) => <DiaryMealFoodRow key={i} food={food} />)}

            <DiaryMealBottomRow food={snack} />
        </>
    );
}