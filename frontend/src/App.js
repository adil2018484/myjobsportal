import React, { Component } from "react";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import add from "./components/add";
import show from "./components/show";
import edit from "./components/edit";
import del from "./components/del";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <h1 align='center'>Welcome to JOB LISTING PORTAL !</h1>
        </header>
        <br />
        <br />
        <br />
        <div align='center'>
          <ul>
            <li>
              {" "}
              <Link to='/'>Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='/add'>Add A JOB </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='/show'>Show JOBS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='/edit'>Update A JOB </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='/del'>Delete A JOB </Link>{" "}
            </li>
          </ul>
        </div>
        <div className='App-intro'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={add} />
            <Route path='/show' component={show} />
            <Route path='/edit' component={edit} />
            <Route path='/del' component={del} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
