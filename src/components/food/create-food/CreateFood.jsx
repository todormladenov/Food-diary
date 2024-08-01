import './CreateFood.css'

export default function CreateFood() {
    return (
        <form className="create-food-form">
            <h3 className='headers'>Create Food</h3>
            <div className="form-row">
                <label htmlFor="name">Food Name</label>
                <input type="text" id="name" name="name" placeholder='Banana' />
            </div>

            <div className="form-row">
                <label htmlFor="protein">Protein</label>
                <input type="number" id="protein" name="protein" placeholder='10' />
            </div>

            <div className="form-row">
                <label htmlFor="fat">Fat</label>
                <input type="number" id="fat" name="fat" placeholder='6' />
            </div>

            <div className="form-row">
                <label htmlFor="carbs">Carbs</label>
                <input type="number" id="carbs" name="carbs" placeholder='30' />
            </div>

            <div className="form-row">
                <label htmlFor="servingSize">Carbs</label>
                <input type="text" id="servingSize" name="servingSize" placeholder='100 grams' />
            </div>

            <div className="form-row">
                <button type="submit">Create</button>
            </div>
        </form >
    );
}