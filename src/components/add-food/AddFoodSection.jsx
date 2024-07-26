import { Link, useParams } from "react-router-dom";
import './AddFoodSection.css';
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { searchFoodsByName } from "../../services/foodAPI";

const initialValues = { name: '' }

export default function AddFoodSection() {
    const { mealType, dateId } = useParams();
    const [foods, setFoods] = useState([]);

    const searchFoodHandler = async (values) => {
        const foodsResult = await searchFoodsByName(values);

        setFoods(foodsResult.results);
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, searchFoodHandler);
    return (
        <>
            <header className="headers">
                <h2>Add Food</h2>
            </header>

            <form className="search-form" onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="name">Food Name</label>
                    <input id="name" name="name" type="text" placeholder="eg. Rice" value={formValues.name} onChange={changeHandler} />
                </div>

                <button type="submit">Search</button>

            </form>

            <div className="meal-type">
                <h5>Meal Type:</h5>
                <p>{mealType}</p>
            </div>

            <div className="action-btns">
                <Link to='/create-food'>
                    <button className="btn-create" type="submit">
                        Create Food
                    </button>
                </Link>

                <Link>
                    <button className="btn-go-back" type="button">
                        Go Back To Diary
                    </button>
                </Link>
            </div>
        </>
    );
}