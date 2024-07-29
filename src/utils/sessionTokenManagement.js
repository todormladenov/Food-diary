export const getSessionToken = () => {
    return sessionStorage.getItem('sessionToken');
}

export const setSessionToken = (value) => {
    return sessionStorage.setItem('sessionToken', value);
}

export const clearSessionToken = () => {
    return sessionStorage.removeItem('sessionToken');
}