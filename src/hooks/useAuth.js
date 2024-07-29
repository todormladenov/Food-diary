import { useEffect, useState } from "react"
import { clearSessionToken, getSessionToken, setSessionToken } from "../utils/sessionTokenManagement";
import { authUser } from "../services/authAPI";

export const useAuth = () => {
    const [authSate, setAuthState] = useState({});

    const changeAuthState = (state) => {
        if (state.sessionToken) {
            setSessionToken(state.sessionToken)
        } else {
            clearSessionToken();
        }

        setAuthState(state);
    }

    useEffect(() => {
        (async () => {
            const sessionToken = getSessionToken();

            if (!sessionToken) {
                return authSate;
            }

            const user = await authUser();
            changeAuthState(user);
        })()
    }, []);

    return {
        authSate,
        changeAuthState
    }
}