import { useEffect, useState } from "react"

export const useSnackbar = (message, isShown) => {
    const [errorMessage, setMessage] = useState({ message, isShown });

    useEffect(() => {
        setMessage({ message, isShown: true });

        setTimeout(() => {
            setMessage({ message: '', isShown: false });
        }, 3000);

    }, [message])

    return {
        isShown,
        errorMessage
    }
}