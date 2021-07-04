import Axios from 'axios';
import {Observable, from} from 'rxjs';
import { HEADERS } from '../constants/api';

class ApiService{

    private extend = {timeout: 30000};
    get = (url: string , config?:any) : Observable<any> => {
        config = {...config, ...this.extend}
        return from(Axios.create({headers: HEADERS}).get(url,config)
        .then(res => res.data)
        .catch(error => error.response)
        )
    };

    post = (url: string, data?: any, config?:any) : Observable<any> => {
        config = {...config, ...this.extend}
        return from(Axios.create({headers: HEADERS}).post(url, data, config)
        .then(res => res.data)
        .catch(error => error)
        )
    }
}
export default ApiService;