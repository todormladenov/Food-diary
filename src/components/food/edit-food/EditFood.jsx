import { useNavigate, useParams } from "react-router-dom";
import { useGetOneFood } from "../../../hooks/useGetOneFood";
import { useForm } from "../../../hooks/useForm";
import { validateCreateFoodInput } from "../create-food/validateCreateFoodInput";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../../contexts/SnackbarContext";
import { editFood } from "../../../services/foodAPI";
import SharedLoader from "../../shared/shared-loader/SharedLoader";

const initialFoodValues = {
    protein: '',
    name: '',
    calories: '',
    carbs: '',
    fat: '',
    servingSize: ''
};

export default function EditFood() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { foodId } = useParams();
    const { food } = useGetOneFood(foodId);
    const snackbar = useContext(SnackbarContext);
    const navigator = useNavigate();

    const editHandler = async (values) => {
        const errors = validateCreateFoodInput(values);

        if (errors) {
            return setErrors(errors);
        }

        try {
            setIsLoading(true);
            await editFood(foodId, values);
            navigator('/foods-catalog');
        } catch (error) {
            snackbar(error.message);
        } finally { 
            setIsLoading(false);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(Object.assign(initialFoodValues, food), editHandler);
    return (
        <form className="create-food-form" onSubmit={submitHandler}>
            <h3 className='headers'>Edit Food</h3>
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
                <button type="submit">Edit</button>
            </div>
        </form >
    );
}