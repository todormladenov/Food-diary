import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { createFood } from '../../../services/foodAPI';
import './CreateFood.css'
import { AuthContext } from '../../../contexts/AuthContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import { validateCreateFoodInput } from './validateCreateFoodInput';
import SharedLoader from '../../shared/shared-loader/SharedLoader';
import { useNavigate } from 'react-router-dom';
import CategorySelector from '../../shared/category-selector/CategorySelector';

const initialFoodValues = {
    protein: '',
    name: '',
    calories: '',
    carbs: '',
    fat: '',
    servingSize: '',
    category: ''
};

export default function CreateFood() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigator = useNavigate();

    const authState = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);

    const createFoodHandler = async (values) => {
        const errors = validateCreateFoodInput(values);

        if (errors) {
            return setErrors(errors);
        }

        try {
            setIsLoading(true);
            await createFood(values, authState.userId);
            navigator('/foods-catalog');
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialFoodValues, createFoodHandler);
    return (
        <form className="create-food-form" onSubmit={submitHandler}>
            <h3 className='headers'>Create Food</h3>
            {isLoading && <SharedLoader />}

            <div className="form-row">
                <label htmlFor="name">Food Name</label>
                <input type="text" id="name" name="name" placeholder='Banana' value={formValues.name} onChange={changeHandler} />
                {errors.name && <p className='error'>{errors.name}</p>}
            </div>

            <div className="form-row">
                <label htmlFor="calories">Calories</label>
                <input type="number" id="calories" name="calories" placeholder='250' value={formValues.calories} onChange={changeHandler} />
                {errors.calories && <p className='error'>{errors.calories}</p>}
            </div>

            <div className="form-row">
                <label htmlFor="protein">Protein</label>
                <input type="number" id="protein" name="protein" placeholder='10' value={formValues.protein} onChange={changeHandler} />
                {errors.protein && <p className='error'>{errors.protein}</p>}
            </div>

            <div className="form-row">
                <label htmlFor="fat">Fat</label>
                <input type="number" id="fat" name="fat" placeholder='6' value={formValues.fat} onChange={changeHandler} />
                {errors.fat && <p className='error'>{errors.fat}</p>}
            </div>

            <div className="form-row">
                <label htmlFor="carbs">Carbs</label>
                <input type="number" id="carbs" name="carbs" placeholder='30' value={formValues.carbs} onChange={changeHandler} />
                {errors.carbs && <p className='error'>{errors.carbs}</p>}
            </div>

            <div className="form-row">
                <label htmlFor="servingSize">Serving Size</label>
                <input type="text" id="servingSize" name="servingSize" placeholder='100 grams' value={formValues.servingSize} onChange={changeHandler} />
                {errors.servingSize && <p className='error'>{errors.servingSize}</p>}
            </div>

            <div className="form-row">
                <CategorySelector onChange={changeHandler} value={formValues.category} />
                {errors.category && <p className='error'>{errors.category}</p>}
            </div>

            <div className="form-row">
                <button type="submit">Create</button>
            </div>
        </form >
    );
}