// import Rea`ct from 'react';
import { useEffect } from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import history from './components/App.history';
import { Cookies, useCookies } from 'react-cookie';
export type ProtectedRouteProps = {
    isAuth: boolean,
    authenPath : string,
    menu?: any
} & RouteProps;

function ProtectedRoute({isAuth, authenPath , ...rest} : ProtectedRouteProps) {
    const [cookie, setCookie, removeCookie] = useCookies([''])
    if(rest.path === '/')
    {
        if(cookie['session_token'] === undefined){
            return <Route {...rest} />
        }
        else{
            return <Redirect to='/dashboard' />
        }
    }
    else{
        return <Route {...rest}/>;
    //     if(isAuth)
    //     return <Route {...rest}/>;
    // else return <Redirect to={{pathname : authenPath}} />;
    }
}

export default ProtectedRoute;