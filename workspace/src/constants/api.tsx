export const HEADERS = {
    'ContentType': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    //'Authorization': "Bearer " + this.authorService.getToken(),
}

export const APP_URL = 'http://localhost:8080/'
//Is Published production
export const isProduction = false
//Version
export const VERSION = '1.0'
//API BASE URL
export const BASE_URL = isProduction ? 'https://workspace-server.herokuapp.com/api' : 'http://localhost:3000/api';
export const O_BASE_URL = 'https://randomuser.me/api/';
//API url
export const API_URL = {
    USER:{
        LOGIN:`${BASE_URL}/user/login`,
    },
    HOME: {
        ADDRESS:`${BASE_URL}/address/random_address?size=100`,
        TEMP: `${BASE_URL}/anh-thi`
    },
    PROJECT: {
        LIST:`${BASE_URL}/project/`,
        //USER_LIST: `${O_BASE_URL}`
    }
}