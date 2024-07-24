export default function DiaryMealFoodRow({ food }) {
    return (
        <tr>
            <td className="first">{food.name} | {food.servings} servings</td>
            <td>{food.calories}</td>
            <td>{food.carbs}</td>
            <td>{food.fat}</td>
            <td>{food.protein}</td>
            <td>Remove</td>
        </tr>
    );
}