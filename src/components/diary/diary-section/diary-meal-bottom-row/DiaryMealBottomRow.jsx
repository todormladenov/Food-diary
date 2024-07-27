import { Link } from "react-router-dom";
import './DiaryMealBottomRow.css'
import { calculateTotalMealMacros } from "../../../../utils/calculateMacros";

export default function DiaryMealBottomRow({ food, mealType, dateId }) {
    const totalMacros = calculateTotalMealMacros(food);
    mealType = mealType?.toLocaleLowerCase();

    return (
        <tr className="meal-bottom">
            <td className="first">
                <Link to={`/add-food/${mealType}/${dateId}`}>Add Food</Link>
            </td>
            <td>{totalMacros.calories}</td>
            <td>{totalMacros.carbs}</td>
            <td>{totalMacros.fat}</td>
            <td>{totalMacros.protein}</td>
            <td />
        </tr>
    );
}