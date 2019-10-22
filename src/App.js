import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import pickSquadContainer from "./containers/pickSquad/pickSquad";


class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/picksquad" component={pickSquadContainer}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default App;