import { useNutritionInfo } from '../../../hooks/useNutritionInfo';
import NutritionInfo from '../nutrition-info/NutritionInfo';
import './SearchFoodResult.css'

export default function SearchFoodResult({ food }) {
    const { isShown, showNutritionInfo, hideNutritionInfo } = useNutritionInfo();

    return (
        <>
            {
                isShown
                &&
                <NutritionInfo food={food} onHideNutritionInfo={hideNutritionInfo} />
            }
            <form className="add-meal-form">
                <div className="food-row">
                    <input type="submit" value='Add' className="btn" />
                    <label>{food.name}</label>
                    <strong>Servings</strong>
                    <input type="number" name="servings" id="servings" />
                    <p>Serving Size {food.servingSize}</p>
                    <button type="button" className="btn" onClick={showNutritionInfo}>Nutrition value</button>
                </div >
            </form>
        </>
    );
}