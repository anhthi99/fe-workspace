import React from 'react';
import { Col, Progress, Row, Button } from 'antd';

interface IProps{

}

interface IState{
    value : any,
}
export default class Home extends React.Component<{}, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
        }
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
                <Row>
                    <Col span={6}>
                    
                    </Col>
                </Row>
               
                
            </div>
        )
    }
}