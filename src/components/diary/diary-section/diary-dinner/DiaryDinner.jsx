import DiaryMealBottomRow from "../diary-meal-bottom-row/DiaryMealBottomRow";
import DiaryMealFoodRow from "../diary-meal-food-row/DiaryMealFoodRow";
import DiaryMealTopRow from "../diary-meal-top-row/DiaryMealTopRow";

export default function DiaryDinner({ dateId, dinner, onDelete }) {
    const mealType = 'Dinner';

    return (
        <>
            <DiaryMealTopRow mealType={mealType} />

            {dinner.map((food, i) => <DiaryMealFoodRow
                key={i}
                food={food}
                mealType={mealType.toLocaleLowerCase()}
                index={i}
                onDelete={onDelete}
            />)}

            <DiaryMealBottomRow food={dinner} mealType={mealType} dateId={dateId} />
        </>
    );
}