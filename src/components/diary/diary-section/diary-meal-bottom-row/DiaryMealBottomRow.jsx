import { Link } from "react-router-dom";
import './DiaryMealBottomRow.css'

export default function DiaryMealBottomRow() {
    return (
        <tr className="meal-bottom">
            <td className="first">
                <Link to={`/add-food/mealType/dateId`}>Add Food</Link>
            </td>
            <td>180</td>
            <td>40</td>
            <td>0</td>
            <td>1</td>
            <td />
        </tr>
    );
}