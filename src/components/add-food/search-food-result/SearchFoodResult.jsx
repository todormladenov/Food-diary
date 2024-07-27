import { useParams } from 'react-router-dom';
import { useAddFood } from '../../../hooks/useAddFood';
import { useForm } from '../../../hooks/useForm';
import { useNutritionInfo } from '../../../hooks/useNutritionInfo';
import NutritionInfo from '../nutrition-info/NutritionInfo';
import './SearchFoodResult.css'

export default function SearchFoodResult({ food }) {
    const { mealType, dateId } = useParams();
    const { isShown, showNutritionInfo, hideNutritionInfo } = useNutritionInfo();
    const { initialFoodValues, addFood } = useAddFood(food, dateId, mealType);

    const addFoodHandler = async (foodValues) => {
        await addFood(foodValues);
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