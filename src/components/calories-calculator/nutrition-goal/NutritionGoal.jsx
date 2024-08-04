import { useContext, useState } from 'react';
import { updateUserNutritionGoal } from '../../../services/userAPI';
import './NutritionGoal.css'
import { AuthContext } from '../../../contexts/AuthContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import SharedLoader from '../../shared/shared-loader/SharedLoader';

export default function NutritionGoal({ nutritionGoal }) {
    const authContext = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);
    const [isLoading, setIsLoading] = useState(false);

    const updateNutritionGoal = async () => {
        setIsLoading(true);

        try {
            await updateUserNutritionGoal(authContext.userId, { nutritionGoal });
            authContext.changeAuthState({ ...authContext, nutritionGoal });
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="result">
            {isLoading
                &&
                <SharedLoader />
            }
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