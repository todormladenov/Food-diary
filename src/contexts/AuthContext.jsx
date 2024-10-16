import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext({
    username: '',
    accessToken: '',
    isAuth: false,
    userId: '',
    changeAuthState: () => null,
});

export function AuthContextProvider(props) {
    const { authState, changeAuthState, logoutUser, isAuthenticating } = useAuth();

    const contextData = {
        username: authState?.username,
        sessionToken: authState?.sessionToken,
        isAuth: !!authState?.sessionToken,
        userId: authState?.objectId,
        nutritionGoal: authState?.nutritionGoal,
        changeAuthState,
        logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {!isAuthenticating && props.children}
        </AuthContext.Provider>
    )
}