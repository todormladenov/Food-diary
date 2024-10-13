import { useParams } from 'react-router-dom';
import { useAddFood } from '../../../hooks/useAddFood';
import { useForm } from '../../../hooks/useForm';
import { useNutritionInfo } from '../../../hooks/useNutritionInfo';
import NutritionInfo from '../nutrition-info/NutritionInfo';
import './SearchFoodResult.css'
import SharedLoader from '../../shared/shared-loader/SharedLoader';
import { useContext, useState } from 'react';
import { SnackbarContext } from '../../../contexts/SnackbarContext';

export default function SearchFoodResult({ food }) {
    const { mealType, dateId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { isShown, showNutritionInfo, hideNutritionInfo } = useNutritionInfo();
    const { initialFoodValues, addFood } = useAddFood(food, dateId, mealType);

    const snackbar = useContext(SnackbarContext);

    const addFoodHandler = async (foodValues) => {
        setIsLoading(true);

        try {
            await addFood(foodValues);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 5000);
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialFoodValues, addFoodHandler);
    return (
        <>
            {
                isShown
                &&
                <NutritionInfo food={food} onHideNutritionInfo={hideNutritionInfo} />
            }
            <form className="add-meal-form" onSubmit={submitHandler}>

                {isAdded &&
                    <div className="success-animation">
                        <i class="fa-solid fa-check fa-bounce"> {food.name} added !</i>
                    </div>
                }

                {isLoading && <SharedLoader />}
                <div className="food-row">
                    <input type="submit" value='Add' className="btn" />
                    <label>{food.name}</label>
                    <strong>Servings</strong>
                    <input type="number" name="servings" id="servings"
                        value={formValues.servings}
                        onChange={changeHandler}
                    />
                    <p>Serving Size {food.servingSize}</p>
                    <button type="button" className="btn" onClick={showNutritionInfo}>Nutrition value</button>
                </div >
            </form>
        </>
    );
}