export const validateRegisterInput = (values) => {
    const { username, password, rePassword } = values;

    const errors = {};

    if (!username.trim() || username.trim().length < 4) {
        errors.username = 'Username should be at least 2 symbols';
    }

    if (!password.trim() || password.trim().length < 8) {
        errors.password = 'Password must be at least 8 symbols';
    }

    if (password.trim() !== rePassword.trim()) {
        errors.rePassword = 'Passwords must match';
    }

    if (Object.keys(errors).length > 0) {
        return errors
    }

    return null;
}