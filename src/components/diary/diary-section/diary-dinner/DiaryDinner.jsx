import DiaryMealBottomRow from "../diary-meal-bottom-row/DiaryMealBottomRow";
import DiaryMealTopRow from "../diary-meal-top-row/DiaryMealTopRow";

export default function DiaryDinner() {
    const mealType = 'Dinner';

    return (
        <>
            <DiaryMealTopRow mealType={mealType} />
            <tr>
                <td className="first">Banana | 1 servings</td>
                <td>90</td>
                <td>20</td>
                <td>0</td>
                <td>1</td>
                <td>Remove</td>
            </tr>

            <tr>
                <td className="first">Banana | 1 servings</td>
                <td>90</td>
                <td>20</td>
                <td>0</td>
                <td>1</td>
                <td>Remove</td>
            </tr>
            <DiaryMealBottomRow />
        </>
    );
}