import { createContext, useState } from "react";

export const SnackbarContext = createContext({
    errorMessage: '',
    isSnackbarShown: false,
    showSnackbar: () => null
});

export function SnackbarProvider(props) {
    const [snackbar, setSnackbar] = useState({ errorMessage: '', isSnackbarShown: false });

    const showSnackbar = (message) => {
        setSnackbar({ errorMessage: message, isSnackbarShown: true });

        setTimeout(() => {
            setSnackbar({ message: '', isSnackbarShown: false });
        }, 3000);
    }

    const contextData = {
        errorMessage: snackbar.errorMessage,
        isSnackbarShown: snackbar.isSnackbarShown,
        showSnackbar
    }

    return (
        <SnackbarContext.Provider value={contextData}>
            {props.children}
        </SnackbarContext.Provider>
    )
} 