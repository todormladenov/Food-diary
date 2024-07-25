import { Link, useParams } from "react-router-dom";
import './AddFoodSection.css';

export default function AddFoodSection() {
    const { mealType, dateId } = useParams();

    return (
        <>
            <header className="headers">
                <h2>Add Food</h2>
            </header>

            <form className="search-form">
                <div className="form-row">
                    <label htmlFor="name">Food Name</label>
                    <input id="name" name="name" type="text" placeholder="eg. Rice" />
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