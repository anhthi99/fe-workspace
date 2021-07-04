import React from 'react';
import ApiService from '../services/api.service';
import {API_URL} from '../constants/api'

interface IProps{

}

interface IState{
    value : any,
}
export default class Home extends React.Component<{}, IState>{
    private xx = new ApiService();
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    componentDidMount(){
        this.xx.get(API_URL.HOME.TEMP).subscribe(res => {
            console.log(res);
        })
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}