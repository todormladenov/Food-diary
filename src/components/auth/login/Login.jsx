import { Link, useNavigate } from 'react-router-dom';
import '../Auth.css';
import { login } from '../../../services/authAPI';
import { useForm } from '../../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';

const initialValues = {
    username: '',
    password: ''
}

export default function Login() {
    const authState = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);
    const navigator = useNavigate();

    const loginHandler = async (values) => {
        try {
            const user = await login(values.username, values.password);
            authState.changeAuthState(user);
            navigator('/');
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, loginHandler);
    return (
        <form className="form" onSubmit={submitHandler}>
            <h2>Login</h2>

            <div className="field-wrapper">
                <input type="text" id="username" name="username" placeholder='Username' autoComplete='on'
                    value={formValues.username}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="username">Username</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="password" name="password" placeholder='Password' autoComplete='on'
                    value={formValues.password}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>

            <div className="field-wrapper">
                <span>You don't have account? <Link to="/auth/register">Register here</Link></span>
            </div>

            <div className="field-wrapper">
                <input type="submit" value="Login" />
            </div>

        </form>
    );
}