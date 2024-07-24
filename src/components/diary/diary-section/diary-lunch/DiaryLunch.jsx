import DiaryMealBottomRow from "../diary-meal-bottom-row/DiaryMealBottomRow";
import DiaryMealFoodRow from "../diary-meal-food-row/DiaryMealFoodRow";
import DiaryMealTopRow from "../diary-meal-top-row/DiaryMealTopRow";

export default function DiaryLunch({ dateId, lunch }) {
    const mealType = 'Lunch';

    return (
        <>
            <DiaryMealTopRow mealType={mealType} />

            {lunch.map((food, i) => <DiaryMealFoodRow key={i} food={food} />)}

            <DiaryMealBottomRow food={lunch} mealType={mealType} dateId={dateId} />
        </>
    )
}