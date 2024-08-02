import DiaryMealTopRow from "../diary-meal-top-row/DiaryMealTopRow";
import DiaryMealBottomRow from "../diary-meal-bottom-row/DiaryMealBottomRow";
import DiaryMealFoodRow from "../diary-meal-food-row/DiaryMealFoodRow";

export default function DiaryBreakfast({ dateId, breakfast, onDelete }) {
    const mealType = 'Breakfast';

    return (
        <>
            <DiaryMealTopRow mealType={mealType} />

            {breakfast.map((food, i) => <DiaryMealFoodRow
                key={i}
                food={food}
                mealType={mealType.toLocaleLowerCase()}
                index={i}
                onDelete={onDelete}
            />)}

            <DiaryMealBottomRow food={breakfast} mealType={mealType} dateId={dateId} />
        </>
    );
}