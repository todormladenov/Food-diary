export default function SearchFoodResult({ food }) {
    return (
        <form className="add-meal-form">
            <div className="food-row">
                <input type="submit" value='Add' className="btn" />
                <label>{food.name}</label>
                <strong>Servings</strong>
                <input type="number" name="servings" id="servings" />
                <p>Serving Size {food.servingSize}</p>
                <button type="button" className="btn">Nutrition value</button>
            </div >
        </form>
    );
}