// import Rea`ct from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuth: boolean,
    authenPath : string,
    menu?: any
} & RouteProps;

function ProtectedRoute({isAuth, authenPath , ...rest} : ProtectedRouteProps) {
    
    if(isAuth)
        return <Route {...rest}/>;
    else return <Redirect to={{pathname : authenPath}} />;
}

export default ProtectedRoute;