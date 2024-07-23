export default function Login(){
    return(
        <div className="login-section">
            <form className="login-form">
                <h2>Login</h2>

                <div className="field-wrapper">
                    <label htmlFor="username"></label>
                    <input type="text" id="username" name="username"/>
                </div>

                <div className="field-wrapper">
                    <label htmlFor="username"></label>
                    <input type="text" id="username" name="username"/>
                </div>

                <div className="field-wrapper">
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    );
}