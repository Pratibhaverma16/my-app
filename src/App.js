import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginComponent";
import Signup from "./components/SignupComponent";
import Designation from "./components/DesignationComponent";
import Group from "./components/GroupComponent";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/information"}>Information System</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}> Signup</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/designation"}> Designation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/group"}> Group</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path='/'>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Login />
            </div>
          </div>
        </Route>

        <Route path="/sign-in">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Login />
            </div>
          </div>
        </Route>
        <Route path="/sign-up"
          component={Signup} />


        <Route path='/designation'>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Designation />
            </div>
          </div>
        </Route>

        <Route path='/group'>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Group />
            </div>
          </div>
        </Route>

      </Switch>
    </div></Router>
  );
}

export default App;