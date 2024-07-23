import { Link } from "react-router-dom";
import '../Auth.css'

export default function Register() {
    return (
        <form className="form">
            <h2>Register</h2>

            <div className="field-wrapper">
                <input type="text" id="username" name="username" placeholder='Username' autoComplete="on" />
                <label htmlFor="username">Username</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="password" name="password" placeholder='Password' autoComplete="on" />
                <label htmlFor="password">Password</label>
            </div>

            <div className="field-wrapper">
                <input type="password" id="rePassword" name="rePassword" placeholder='Repeat Password' autoComplete="on" />
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