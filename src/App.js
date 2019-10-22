import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import pickSquadContainer from "./containers/pickSquad/pickSquad";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import promiseMiddleware from "redux-promise";
import logger from "redux-logger";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={createStoreWithMiddleware(rootReducer,applyMiddleware(logger))}>
                    <Router>
                        <Switch>
                            <Route path="/picksquad" component={pickSquadContainer}/>
                        </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App;