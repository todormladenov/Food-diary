import { Link, useParams } from "react-router-dom";
import './AddFoodSection.css';
import { useForm } from "../../hooks/useForm";
import { useContext, useState } from "react";
import { searchFoodsByCategory, searchFoodsByName } from "../../services/foodAPI";
import SearchFoodResult from "./search-food-result/SearchFoodResult";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import CategorySelector from "../shared/category-selector/CategorySelector";

const initialValues = { name: '' }

export default function AddFoodSection() {
    const { mealType, dateId } = useParams();
    const [foods, setFoods] = useState([]);
    const [errors, setErrors] = useState({});
    const [hasSearched, setHasSearched] = useState(false);
    const snackbar = useContext(SnackbarContext);

    const searchFoodHandler = async (values) => {
        if (!values.name.trim()) {
            return setErrors({ message: 'Food name is required' })
        } else {
            setErrors({});
        }

        try {
            const foodsResult = await searchFoodsByName(values);

            setFoods(foodsResult.results);
            setHasSearched(true);
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }

    }

    const handleSearchFoodsByCategory = async (category) => {
        setErrors({});
        
        try {
            const foods = await searchFoodsByCategory(category);
            setFoods(foods.results);            
        } catch (error) {
            setErrors({ message: 'Something went wrong, please try again.' });
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, searchFoodHandler);
    return (
        <>
            <header className="headers">
                <h2>Add Food</h2>
            </header>

            <CategorySelector onSearch={handleSearchFoodsByCategory} />

            <form className="search-form" onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="name">Food Name</label>
                    <input id="name" name="name" type="text" placeholder="eg. Rice"
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                </div>

                <button type="submit">Search</button>

            </form>
            {errors.message && <p className="error">{errors.message}</p>}

            {hasSearched && foods.length === 0 && <p className="no-results-message">No Results Found</p>}

            {foods.map(food =>
                <SearchFoodResult
                    key={food.objectId}
                    food={food}
                />)
            }

            <div className="meal-type">
                <h5>Meal Type:</h5>
                <p>{mealType}</p>
            </div>

            <div className="action-btns">
                <Link to='/create-food'>
                    <button className="btn-create">
                        Create Food
                    </button>
                </Link>
            </div>
        </>
    );
}