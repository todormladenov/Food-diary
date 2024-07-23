import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    return (
        <div className="login-section">
            <form className="login-form">
                <h2>Login</h2>

                <div className="field-wrapper">
                    <input type="text" id="username" name="username" placeholder='Username' />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="field-wrapper">
                    <input type="password" id="password" name="password" placeholder='Password' />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="field-wrapper">
                    <span>You don't have account? <Link to="/auth/register">Register here</Link></span>
                </div>

                <div className="field-wrapper">
                    <input type="submit" value="Login" />
                </div>

            </form>
        </div>
    );
}