import { useState } from "react"

export const useForm = (initialValues, submitCallback) => {
    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(formValues);
    }

    return {
        formValues,
        changeHandler,
        submitHandler
    }
}