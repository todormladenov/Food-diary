import { Link, useNavigate } from 'react-router-dom';
import '../Auth.css';
import { login } from '../../../services/authAPI';
import { useForm } from '../../../hooks/useForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import SharedLoader from '../../shared/shared-loader/SharedLoader';

const initialValues = {
    username: '',
    password: ''
}

export default function Login() {
    const [errors, setErrors] = useState({ message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const authState = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);
    const navigator = useNavigate();

    const loginHandler = async (values) => {
        if (values.username.trim() === '' || values.password.trim() === '') {
            return setErrors({ message: 'Username and password is required' });
        }

        try {
            setIsLoading(true);
            const user = await login(values.username, values.password);
            authState.changeAuthState(user);
            navigator('/');
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, loginHandler);
    return (
        <form className="form" onSubmit={submitHandler}>
            {isLoading && <SharedLoader />}

            <h2>Login</h2>
            {errors.message && <p className='error'>{errors.message}</p>}
            <div className="field-wrapper">
                <input type="text" id="username" name="username" placeholder='Username' autoComplete='on'
                    value={formValues.username}
                    onChange={changeHandler}
                />
                <label htmlFor="username">Username</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="password" name="password" placeholder='Password' autoComplete='on'
                    value={formValues.password}
                    onChange={changeHandler}
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