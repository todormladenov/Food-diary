import { useContext } from 'react';
import { updateUserNutritionGoal } from '../../../services/userAPI';
import './NutritionGoal.css'
import { AuthContext } from '../../../contexts/AuthContext';

export default function NutritionGoal({ nutritionGoal }) {
    const authContext = useContext(AuthContext);

    const updateNutritionGoal = async () => {
        await updateUserNutritionGoal(authContext.userId, { nutritionGoal })
    }
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
            {authContext.isAuth
                &&
                <button onClick={updateNutritionGoal}>Save Goal</button>
            }
        </div>
    );
}