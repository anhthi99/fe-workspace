import React from "react";
import {RouteComponentProps} from 'react-router-dom';
interface IProps extends RouteComponentProps{

}

interface IState{
    
}

export default class Project extends React.Component<IProps, IState>{
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
        
    }
    render(){
        return (
            <div>
                <h1>Project</h1>
            </div>
            
        )
    }
}