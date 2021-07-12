import React from 'react'
import { combineReducers } from 'redux'
const initState = {
    isShow : true
}

const data = (state = initState, action : any) => {
    switch (action.type) {
        case 'SHOWNAVBAR':
            return {...state, isShow: action.hv}
        default:
            return {...state}
    }
}
const reducerApp = combineReducers({data})
export default reducerApp