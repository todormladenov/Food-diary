import { useParams } from 'react-router-dom';
import { useAddFood } from '../../../hooks/useAddFood';
import { useForm } from '../../../hooks/useForm';
import { useNutritionInfo } from '../../../hooks/useNutritionInfo';
import NutritionInfo from '../nutrition-info/NutritionInfo';
import './SearchFoodResult.css'
import SharedLoader from '../../shared/shared-loader/SharedLoader';
import { useState } from 'react';

export default function SearchFoodResult({ food }) {
    const { mealType, dateId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const { isShown, showNutritionInfo, hideNutritionInfo } = useNutritionInfo();
    const { initialFoodValues, addFood } = useAddFood(food, dateId, mealType);

    const addFoodHandler = async (foodValues) => {
        setIsLoading(true);
        await addFood(foodValues);
        setIsLoading(false);
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
                {isLoading && <SharedLoader />}
                <div className="food-row">
                    <input type="submit" value='Add' className="btn" />
                    <label>{food.name}</label>
                    <strong>Servings</strong>
                    <input type="number" name="servings" id="servings" value={formValues.servings} onChange={changeHandler} />
                    <p>Serving Size {food.servingSize}</p>
                    <button type="button" className="btn" onClick={showNutritionInfo}>Nutrition value</button>
                </div >
            </form>
        </>
    );
}