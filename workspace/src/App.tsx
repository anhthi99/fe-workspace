import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {Row, Col,DatePicker, Space} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Home from './screens/home';
import NavBar from './components/navbar';
import Project from './screens/project';

interface IProps{
  text? : string | null,
}

interface IState{
  date?: string | null,
}

export default class App extends React.Component<IProps,IState> {
  constructor(props :IProps) {
    super(props);

    this.state = {
      date : ''
    }
  }
  dateHandler = (val? : any) => {
    if(val != null)
    this.setState({
      date : val.format('D/MM/yyyy')
    })
    else
    this.setState({date : null})
  };

  render(){
    return (
     <Router>
       <NavBar />
       <Switch>
         
         <Route path='/' exact component={Home} />
         <Route path='/project' component={Project} />
         <Route path='/issue' />
       </Switch> 
     </Router>
    )
    
  }
}
