import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location.pathname)
    if(loading){
        return "loading..."
    }
    if(user){
        return children; 
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoute;