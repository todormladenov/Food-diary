import { createContext, useState } from "react";

export const AuthContext = createContext({
    email: '',
    accessToken: '',
    isAuth: false,
    userId: '',
    changeAuthState: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {
        if (state.accessToken) {
            sessionStorage.setItem('accessToken', state.accessToken);
        } else {
            sessionStorage.clear();
        }

        setAuthState(state);
    }

    const contextData = {
        username: authState.username,
        sessionToken: authState.sessionToken,
        isAuth: !!authState.sessionToken,
        userId: authState.objectId,
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}