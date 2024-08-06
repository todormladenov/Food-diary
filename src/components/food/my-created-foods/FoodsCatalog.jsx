import './FoodsCatalog.css'
import { useContext } from 'react';
import { useGetFoods } from '../../../hooks/useGetFoods';
import FoodItem from './food-item/FoodItem';
import { deleteFoodById } from '../../../services/foodAPI';
import { SnackbarContext } from '../../../contexts/SnackbarContext';

export default function FoodsCatalog() {
    const { foods, changeFoods, currentPage, setCurrentPage, totalPages, } = useGetFoods();
    const snackbar = useContext(SnackbarContext);


    const deleteHandler = async (foodId) => {
        try {
            await deleteFoodById(foodId);
            changeFoods('DELETE_ONE', foodId);
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
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

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
}