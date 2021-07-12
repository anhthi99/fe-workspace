import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/navbar";
import { MENU } from "../constants/menu";
import { NotFound } from "./404";
import MyEditor from "./editor";
import Home from "./home";
import News from "./news";
import Project from "./project";
import TestS from "./test";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Route path='/dashboard' component={Home}/>
        {MENU.map(x => x.component != null ? <Route path={`/${x.key}`} component={x.component} /> : null)}
        
        <Route path="/test" component={TestS} />
        <Route path="/editor/:id" component={MyEditor} />
      </>
    );
  }
}
