import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import MyEditor from "./screens/editor";
import NavBar from "./components/navbar";
import TestS from "./screens/test";
import ProtectedRoute, { ProtectedRouteProps } from "./app.route";
import Login from "./screens/login";
import { NotFound } from "./screens/404";
import { Layout } from "antd";
import Home from "./screens/home";
import { MENU } from "./constants/menu";
import { connect } from "react-redux";
import News from "./screens/news";
import NewsDetail from "./screens/newsDetail";
import Wiki from "./screens/wiki";
import Initialize from "./redux/initialize";



interface IProps {
  text?: string | null,
  isShow?: any
}

interface IState {
  date?: string | null;
}
const { Header, Content } = Layout;
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      date: "",
    };
  }

  render() {
    const defaultProtectedProps: ProtectedRouteProps = {
      authenPath: '/',
      isAuth: false,
    };
    return (
      <Router>
        <Initialize />
        {this.props.isShow ? <NavBar /> : ''}
        <Switch>
          <ProtectedRoute exact {...defaultProtectedProps} path='/' component={Login}/>

        <ProtectedRoute {...defaultProtectedProps} path='/dashboard' component={Home}/>
        {/* {MENU.map(x => x.component != null ? <Route key={x.key} exact path={`/${x.key}`} component={x.component} /> : null)} */}
        <Route exact path='/news' component={News}/>
        <Route path='/news/:tit' component={NewsDetail}/>
        <Route exact path='/wiki' component={Wiki}/>
        <Route path="/test" component={TestS} />
        {/*
          Test region
        */}
        <Route path="/editor/:id" component={MyEditor} />
        <Route component={NotFound} />  
        </Switch>
        
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
      isShow: state.data.isShow
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//   const action = bindActionCreators({showNavBar}, dispatch)
//   return {...action}
// }

export default connect(mapStateToProps, null)(App);