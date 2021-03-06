import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import SignIn from './components/auth/SignIn'
import { connect } from 'react-redux'
import PickSquadContainer from "./_containers/pickSquad/pickSquad";
import ManageTeam from "./_containers/manageTeam/manageTeam";
import Landing from "./_containers/landing/landing";
import EmailAccept from "./_containers/email_acceptance/email_accept";
import HowToUse from "./components/HowToUsePage/HowToUse";


class App extends Component {
  render() {
    console.log(this.props)
    return (
            <Router>
                <div className="App">
                    {/*<Navbar />*/}
                    <div className="contain">
                        <Switch>
                            <Route path="/login" component={SignIn} />
                            <Route path="/picksquad" component={PickSquadContainer} />
                            <Route path="/manageTeam" component={ManageTeam}/>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/auth/registeration/activate/:token" component={EmailAccept}/>
                            <Route path="/howtouse" component={HowToUse}/>
                        </Switch>
                    </div>
                </div>
            </Router>

      
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
