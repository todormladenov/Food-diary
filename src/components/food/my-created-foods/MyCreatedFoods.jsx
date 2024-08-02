import './MyCreatedFoods.css'
import { useContext } from 'react';
import { useGetFoods } from '../../../hooks/useGetFoods';
import FoodItem from './food-item/FoodItem';
import { deleteFoodById } from '../../../services/foodAPI';
import { SnackbarContext } from '../../../contexts/SnackbarContext';

export default function MyCreatedFoods() {
    const { foods, changeFoods } = useGetFoods();
    const snackbar = useContext(SnackbarContext);


    const deleteHandler = async (foodId) => {
        try {
            await deleteFoodById(foodId);
            changeFoods('DELETE_ONE', foodId);
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    return (
        <div className='catalog-section'>
            <section className="hero">
                <h1>Your Food Catalog</h1>
                <p>Manage your custom foods and track their nutritional value.</p>
            </section>
            <div className="food-container">
                {foods.map(food => <FoodItem key={food.objectId} food={food} onDelete={deleteHandler} />)}
            </div>
        </div>
    );
}