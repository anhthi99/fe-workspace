import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import {  Route, useHistory } from 'react-router-dom';
import Login from '../screens/login';

function SXMN(){
    const [cookie, setCookie, removeCookie] = useCookies(['']);
    const history = useHistory();
}

export default SXMN;