import { useForm } from '../../hooks/useForm';
import './CaloriesCalculator.css'
import NutritionGoal from './nutrition-goal/NutritionGoal';
import { useNutritionGoal } from '../../hooks/useNutritionGoal';
import { useState } from 'react';
import { validateCalculatorInput } from './validateCalculatorInput';

const initialValues = {
    weight: 82,
    height: 180,
    age: 24,
    activity: 'little',
    goal: 'maintain'
}

export default function CaloriesCalculator() {
    const { isShown, nutritionGoal, changeNutritionGoal } = useNutritionGoal();
    const [errors, setErrors] = useState({});

    const calculateCaloriesHandler = (values) => {
        const errors = validateCalculatorInput(values);
        if (errors) {
            return setErrors(errors);
        }

        setErrors({});
        changeNutritionGoal(values);
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, calculateCaloriesHandler);
    return (
        <>
            <div className="calories-section">

                <form className="calculate-form" onSubmit={submitHandler}>
                    <h3 className='headers'>Calculate your calories</h3>
                    <div className="form-row">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" id="weight" name="weight" placeholder='82'
                            value={formValues.weight}
                            onChange={changeHandler}
                        />
                        <span className='unit'>kg</span>
                        {errors.weight && < p className="error">{errors.weight}</p>}
                    </div>

                    <div className="form-row">
                        <label htmlFor="height">Height</label>
                        <input type="number" id="height" name="height" placeholder='180'
                            value={formValues.height}
                            onChange={changeHandler}
                        />
                        <span className='unit'>cm</span>
                        {errors.height && < p className="error">{errors.height}</p>}
                    </div>

                    <div className="form-row">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" placeholder='24'
                            value={formValues.age}
                            onChange={changeHandler}
                        />
                        {errors.age && < p className="error">{errors.age}</p>}
                    </div>

                    <div className="form-row">
                        <label htmlFor="activity">Activity Level</label>
                        <select name="activity" value={formValues.activity} onChange={changeHandler} required>
                            <option value="little">Little: No activity</option>
                            <option value="lite">Lite: Exercise 1-3 times per week</option>
                            <option value="moderate">Moderate: Exercise 4-5 times per week</option>
                            <option value="active">Active: Exercise daily</option>
                        </select>
                        {errors.activity && < p className="error">{errors.activity}</p>}
                    </div>

                    <div className="form-row">
                        <label htmlFor="goal">Goal</label>
                        <select name="goal" value={formValues.goal} onChange={changeHandler} required>
                            <option value="maintain">Maintain weight</option>
                            <option value="loss">Weight loss</option>
                            <option value="gain">Weight gain</option>
                        </select>
                        {errors.goal && < p className="error">{errors.goal}</p>}
                    </div>

                    <div className="form-row">
                        <button type="submit">Calculate</button>
                    </div>
                </form >
                {isShown &&
                    <NutritionGoal nutritionGoal={nutritionGoal} />
                }
            </div >
        </>
    );
}