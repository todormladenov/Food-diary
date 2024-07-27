import './CaloriesCalculator.css'

export default function CaloriesCalculator() {
    return (
        <>
            <div className="calories-section">

                <form className="calculate-form">
                    <h3 className='headers'>Calculate your calories</h3>
                    <div className="form-row">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" id="weight" name="weight" placeholder='82'/>
                        <span className='unit'>kg</span>
                    </div>

                    <div className="form-row">
                        <label htmlFor="height">Height</label>
                        <input type="number" id="height" name="height" placeholder='180'/>
                        <span className='unit'>cm</span>
                    </div>

                    <div className="form-row">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" placeholder='24'/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="activity">Activity Level</label>
                        <select name="activity">
                            <option value="little">Little: No activity</option>
                            <option value="lite">Lite: Exercise 1-3 times per week</option>
                            <option value="moderate">Moderate: Exercise 4-5 times per week</option>
                            <option value="active">Active: Exercise daily</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <label htmlFor="goal">Goal</label>
                        <select name="goal">
                            <option value="maintain">Maintain weight</option>
                            <option value="loss">Weight loss</option>
                            <option value="gain">Weight gain</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <button type="submit">Calculate</button>
                    </div>
                </form>

                <div className="result">
                    <h3 className='headers'>Daily Nutrition Goals</h3>

                    <div className="result-row">
                        <p>Calories</p>
                        <p>2500</p>
                    </div>

                    <div className="result-row">
                        <p>Carbs</p>
                        <p>250</p>
                    </div>

                    <div className="result-row">
                        <p>Fat</p>
                        <p>75</p>
                    </div>

                    <div className="result-row">
                        <p>Protein</p>
                        <p>180</p>
                    </div>

                    <button>Save Goal</button>
                </div>
            </div>
        </>
    );
}