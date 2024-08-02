import './MyCreatedFoods.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useGetFoods } from '../../../hooks/useGetFoods';
import FoodItem from './food-item/FoodItem';

export default function MyCreatedFoods() {
    const { userId } = useContext(AuthContext);
    const { foods, changeFoods } = useGetFoods();

    return (
        <div className='catalog-section'>
            <section className="hero">
                <h1>Your Food Catalog</h1>
                <p>Manage your custom foods and track their nutritional value.</p>
            </section>
            <div className="food-container">
                {foods.map(food => <FoodItem key={food.objectId} food={food} />)}
            </div>
        </div>
    );
}