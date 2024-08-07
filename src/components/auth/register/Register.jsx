import { Link, useNavigate } from "react-router-dom";
import '../Auth.css'
import { useForm } from "../../../hooks/useForm";
import { register } from "../../../services/authAPI";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../../contexts/SnackbarContext";
import SharedLoader from "../../shared/shared-loader/SharedLoader";
import { validateRegisterInput } from "./validateRegisterInput";

const initialValues = {
    username: '',
    password: '',
    rePassword: '',
}

export default function Register() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigator = useNavigate();
    const snackbar = useContext(SnackbarContext);

    const registerHandler = async (values) => {
        const errors = validateRegisterInput(values);

        if (errors) {
            return setErrors(errors);
        }

        try {
            setIsLoading(true);
            await register(values.username, values.password);
            navigator('/auth/login');
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, registerHandler);
    return (
        <form className="form" onSubmit={submitHandler}>
            <h2>Register</h2>
            {isLoading && <SharedLoader />}
            <div className="field-wrapper">
                <input type="text" id="username" name="username" placeholder='Username' autoComplete="on"
                    value={formValues.username}
                    onChange={changeHandler}
                />
                {errors.username && <p className='error'>{errors.username}</p>}
                <label htmlFor="username">Username</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="password" name="password" placeholder='Password' autoComplete="on"
                    value={formValues.password}
                    onChange={changeHandler}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
                <label htmlFor="password">Password</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="rePassword" name="rePassword" placeholder='Repeat Password' autoComplete="on"
                    value={formValues.rePassword}
                    onChange={changeHandler}
                />
                {errors.rePassword && <p className="error">{errors.rePassword}</p>}
                <label htmlFor="rePassword">Repeat Password</label>
            </div>

            <div className="field-wrapper">
                <span>Already have account? <Link to="/auth/login">Login here</Link></span>
            </div>

            <div className="field-wrapper">
                <input type="submit" value="Register" />
            </div>

        </form>
    );
}