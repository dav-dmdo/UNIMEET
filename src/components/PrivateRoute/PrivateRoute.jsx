import { Navigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export function PrivateRoute({children}){
    const {user, isLoading }= useContext(UserContext)

    if (!user){
        return <Navigate to="/IniciarSesion" />;
    }
    return children;
}