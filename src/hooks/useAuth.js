import { useEffect, useState } from "react"
import { clearSessionToken, getSessionToken, setSessionToken } from "../utils/sessionTokenManagement";
import { authUser, logout } from "../services/authAPI";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [authState, setAuthState] = useState({});
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const navigator = useNavigate();

    const changeAuthState = (state) => {
        if (state.sessionToken) {
            setSessionToken(state.sessionToken)
        } else {
            clearSessionToken();
        }

        setAuthState(state);
    }

    const logoutUser = async () => {
        const res = await logout();
        changeAuthState({});
        navigator('/auth/login');
    }

    useEffect(() => {
        (async () => {
            const sessionToken = getSessionToken();

            if (!sessionToken) {
                return authState;
            }

            const user = await authUser();
            changeAuthState(user);
            setIsAuthenticating(false);
        })()
    }, []);

    return {
        authState,
        changeAuthState,
        logoutUser,
        isAuthenticating
    }
}