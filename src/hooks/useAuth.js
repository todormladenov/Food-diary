import { useContext, useEffect, useState } from "react"
import { clearSessionToken, getSessionToken, setSessionToken } from "../utils/sessionTokenManagement";
import { authUser, logout } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useAuth = () => {
    const [authState, setAuthState] = useState({});
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const snackbar = useContext(SnackbarContext);

    const navigator = useNavigate();

    const changeAuthState = (state) => {
        if (state.sessionToken) {
            setSessionToken(state.sessionToken)
        } else {
            clearSessionToken();
            setAuthState({});
            return
        }

        setAuthState(oldState => ({ ...oldState, ...state }));
    }

    const logoutUser = async () => {
        try {
            await logout();
        } catch (error) {
            snackbar.showSnackbar(error.message);
        } finally {
            changeAuthState({});
            navigator('/auth/login');
        }
    }

    useEffect(() => {
        (async () => {
            const sessionToken = getSessionToken();

            if (!sessionToken) {
                setIsAuthenticating(false);
                return
            }

            try {
                const user = await authUser();
                changeAuthState(user);
            } catch (error) {
                clearSessionToken();
                navigator('/auth/login');
            } finally {
                setIsAuthenticating(false);
            }

        })()
    }, []);

    return {
        authState,
        changeAuthState,
        logoutUser,
        isAuthenticating
    }
}