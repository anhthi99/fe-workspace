import React from 'react';
import { Col, Progress, Row, Button } from 'antd';
import ApiService from '../services/api';
import { API_URL } from '../constants/api';

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
        this.xx.get(API_URL.HOME.ADDRESS).subscribe(res => {
            console.log(res);
        })
    }

    handleClick = () => {
        var rdNum = Math.round(Math.random());
        if(rdNum == 0)
        {
            this.setState({
                value : this.state.value-10
            })
        }
        else{
            this.setState({
                value : this.state.value+20
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}