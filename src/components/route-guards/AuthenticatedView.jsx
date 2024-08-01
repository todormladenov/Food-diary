import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function AuthenticatedView() {
    const { isAuth } = useContext(AuthContext);

    return isAuth
        ? <Outlet />
        : <Navigate to='/auth/login' />

}