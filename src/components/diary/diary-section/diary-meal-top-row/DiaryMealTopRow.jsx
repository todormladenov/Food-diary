import './DiaryMealTopRow.css'

export default function DiaryMealTopRow({ mealType }) {
    return (
        <tr className="meal-top">
            <td className="first">{mealType}</td>
            <td>Calories</td>
            <td>Carbs</td>
            <td>Fat</td>
            <td>Protein</td>
        </tr>
    );
}