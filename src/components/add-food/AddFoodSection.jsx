import { Link, useParams } from "react-router-dom";
import './AddFoodSection.css';
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import SearchFoodResult from "./search-food-result/SearchFoodResult";
import CategorySelector from "../shared/category-selector/CategorySelector";
import { useGetFoods } from "../../hooks/useGetFoods";
import Paginator from "../shared/paginator/Paginator";
import Spinner from "../shared/spinner/Spinner";

const initialValues = { name: '' }

export default function AddFoodSection() {
    const { mealType } = useParams();
    const { foodsList, isLoading, currentPage, totalPages, setCurrentPage, changeSearchQuery } = useGetFoods();
    const [errors, setErrors] = useState({});
    const [hasSearched, setHasSearched] = useState(false);

    const searchFoodHandler = async (values) => {
        if (!values.name.trim()) {
            return setErrors({ message: 'Food name is required' })
        } else {
            setErrors({});
        }

        changeSearchQuery({ name: values.name });
        setHasSearched(true);
    }

    const handleSearchFoodsByCategory = (e) => {
        const category = e.target.value;
        resetFormValues();
        changeSearchQuery({ category, name: '' });
    }

    const { formValues, changeHandler, submitHandler, resetFormValues } = useForm(initialValues, searchFoodHandler);
    return (
        <>
            <header className="headers">
                <h2>Add Food</h2>
            </header>

            <CategorySelector onChange={handleSearchFoodsByCategory} />

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

            {hasSearched && foodsList.length === 0 && <p className="no-results-message">No Results Found</p>}

            {isLoading
                ? <Spinner />
                : foodsList.map(food =>
                    <SearchFoodResult
                        key={food.objectId}
                        food={food}
                    />)
            }

            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                isLoading={isLoading}
            />

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