import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Navbar  from "./components/layout/Navbar"
import React, { Component } from 'react';
import SignIn from './components/auth/SignIn'
export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/signin" component={SignIn} />
            </Switch>
            {/* <SignIn /> */}
          </div>
        </Router> 
      
    )
  }
}

