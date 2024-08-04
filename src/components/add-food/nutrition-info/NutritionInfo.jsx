import './NutritionInfo.css'

export default function NutritionInfo({ food, onHideNutritionInfo }) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onHideNutritionInfo}></div>
            <div className="modal">
                <div className="modal-content">
                    <header className="headers">
                        <h2>Nutrition Information</h2>
                        <button className="close-btn" onClick={onHideNutritionInfo}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </header>
                    <div className="nutrition-info">
                        <p>Food <strong>{food.name}</strong></p>
                        <p>Serving Size <strong>{food.servingSize}</strong></p>
                        <p>Calories <strong>{food.calories}</strong></p>
                        <p>Carbs <strong>{food.carbs}</strong></p>
                        <p>Fats <strong>{food.fat}</strong></p>
                        <p>Protein <strong>{food.protein}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}