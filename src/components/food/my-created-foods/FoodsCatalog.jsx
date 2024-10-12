import './FoodsCatalog.css'
import { useContext } from 'react';
import { useGetFoods } from '../../../hooks/useGetFoods';
import FoodItem from './food-item/FoodItem';
import { deleteFoodById } from '../../../services/foodAPI';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import Paginator from '../../shared/paginator/Paginator';
import CategorySelector from '../../shared/category-selector/CategorySelector';
import Spinner from '../../shared/spinner/Spinner';

export default function FoodsCatalog() {
    const { foods, changeFoods, currentPage, setCurrentPage, totalPages, changeSearchQuery, isLoading } = useGetFoods();
    const snackbar = useContext(SnackbarContext);

    const deleteHandler = async (foodId) => {
        try {
            await deleteFoodById(foodId);
            changeFoods('DELETE_ONE', foodId);
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    const handleSearchFoodsByCategory = (category) => {
        changeSearchQuery({ category, name: '' });
    }

    return (
        <div className='catalog-section'>
            <section className="hero">
                <h1>Your Food Catalog</h1>
                <p>Manage your custom foods and track their nutritional value.</p>
            </section>

            <CategorySelector onSearch={handleSearchFoodsByCategory} />

            <div className="food-container">
                {isLoading
                    ? <Spinner />
                    : foods.map(food => <FoodItem key={food.objectId} food={food} onDelete={deleteHandler} />)
                }
            </div>


            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />

        </div>
    );
}