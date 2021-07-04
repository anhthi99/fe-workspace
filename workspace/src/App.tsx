import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import MyEditor from './screens/editor'
import NavBar from './components/navbar';
import Project from './screens/project';
import TestS from './screens/test';
import ProtectedRoute, { ProtectedRouteProps } from './app.route';
import Login from './screens/login';
import { NotFound } from './screens/404';


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


  render(){
    const defaultProtectedProps : ProtectedRouteProps = { authenPath : '/', isAuth: false}
    return (
     <Router>
       <NavBar />
       <Switch>
         <Route path='/' exact component={Login} />
         <Route path='/project' component={Project} />
         <Route path='/test' component={TestS} />
         <Route path='/editor/:id' component={MyEditor}/>
         {/* <ProtectedRoute {...defaultProtectedProps} path = '/' component={Project} /> */}
         <Route path='*' component={NotFound} />
       </Switch> 
     </Router>
    )
    
  }
}
