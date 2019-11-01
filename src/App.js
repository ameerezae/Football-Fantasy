import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Navbar  from "./components/layout/Navbar"
import React, { Component } from 'react';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { connect } from 'react-redux'
import PickSquadContainer from "./_containers/pickSquad/pickSquad";
import  store from "./_helpers/Store";
import {Provider} from "react-redux";
import ManageTeam from "./_containers/manageTeam/manageTeam";
class App extends Component {
  render() {
    console.log(this.props)
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    {/*<Navbar />*/}
                    <div className="contain">
                        <Switch>
                            <Route path="/login" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/picksquad" component={PickSquadContainer} />
                            <Route path="/manageTeam" component={ManageTeam}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>

      
    )
  }
}
function mapStateToProps(state) {
  return { 
    auth : state.auth
   };
}

// const actionCreators = {
//   clearAlerts: alertActions.clear
// };

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
