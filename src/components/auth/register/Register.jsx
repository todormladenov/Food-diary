import { Link, useNavigate } from "react-router-dom";
import '../Auth.css'
import { useForm } from "../../../hooks/useForm";
import { register } from "../../../services/authAPI";
import { useContext } from "react";
import { SnackbarContext } from "../../../contexts/SnackbarContext";

const initialValues = {
    username: '',
    password: '',
    rePassword: '',
}

export default function Register() {
    const navigator = useNavigate();
    const snackbar = useContext(SnackbarContext);

    const registerHandler = async (values) => {
        try {
            if (values.password !== values.rePassword) {
                throw new Error('Passwords must match');
            }

            await register(values.username, values.password);
            navigator('/auth/login');
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, registerHandler);
    return (
        <form className="form" onSubmit={submitHandler}>
            <h2>Register</h2>

            <div className="field-wrapper">
                <input type="text" id="username" name="username" placeholder='Username' autoComplete="on"
                    value={formValues.username}
                    onChange={changeHandler}
                    required
                    minLength={4}
                />
                <label htmlFor="username">Username</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="password" name="password" placeholder='Password' autoComplete="on"
                    value={formValues.password}
                    onChange={changeHandler}
                    required
                    minLength={8}
                />
                <label htmlFor="password">Password</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="rePassword" name="rePassword" placeholder='Repeat Password' autoComplete="on"
                    value={formValues.rePassword}
                    onChange={changeHandler}
                    required
                />
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