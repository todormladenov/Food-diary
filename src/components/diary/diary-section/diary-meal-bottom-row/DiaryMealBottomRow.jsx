import { Link } from "react-router-dom";
import './DiaryMealBottomRow.css'
import calculateMacros from "../../../../utils/calculateMacros";

export default function DiaryMealBottomRow({ food }) {
    const totalMacros = calculateMacros(food);

    return (
        <tr className="meal-bottom">
            <td className="first">
                <Link to={`/add-food/mealType/dateId`}>Add Food</Link>
            </td>
            <td>{totalMacros.calories}</td>
            <td>{totalMacros.carbs}</td>
            <td>{totalMacros.fat}</td>
            <td>{totalMacros.protein}</td>
            <td />
        </tr>
    );
}