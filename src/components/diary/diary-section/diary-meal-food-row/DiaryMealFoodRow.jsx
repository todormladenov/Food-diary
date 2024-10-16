import SharedLoader from "../../../shared/shared-loader/SharedLoader";

export default function DiaryMealFoodRow({ food, mealType, index, onDelete }) {
    return (
        <tr>
            <td className="first">{food.name} | {food.servings} grams</td>
            <td>{food.calories}</td>
            <td>{food.carbs}</td>
            <td>{food.fat}</td>
            <td>{food.protein}</td>
            <td className="remove">
                <button className="delete-button" onClick={() => onDelete(mealType, index)} >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}