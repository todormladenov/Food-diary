import './NutritionGoal.css'

export default function NutritionGoal({ nutritionGoal }) {
    return (
        <div className="result">
            <h3 className='headers'>Daily Nutrition Goals</h3>

            <div className="result-row">
                <p>Calories</p>
                <p>{nutritionGoal.calories}</p>
            </div>

            <div className="result-row">
                <p>Carbs</p>
                <p>{nutritionGoal.carbs}</p>
            </div>

            <div className="result-row">
                <p>Fat</p>
                <p>{nutritionGoal.fat}</p>
            </div>

            <div className="result-row">
                <p>Protein</p>
                <p>{nutritionGoal.protein}</p>
            </div>

            <button>Save Goal</button>
        </div>
    );
}