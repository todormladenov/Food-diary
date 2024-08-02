import { Link } from "react-router-dom";

export default function FoodItem({ food, onDelete }) {
    return (
        <div className="food-card">
            <h2>{food.name}</h2>
            <p><span>Calories:</span> {food.calories}</p>
            <p><span>Protein:</span> {food.protein}</p>
            <p><span>Carbs:</span> {food.carbs}</p>
            <p><span>Fat:</span> {food.fat}</p>
            <p><span>Serving Size:</span> {food.servingSize}</p>
            <div className="food-buttons">
                <Link to={`/edit-food/${food.objectId}`} className="edit-button">
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button className="delete-button" onClick={() => onDelete(food.objectId)} >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}