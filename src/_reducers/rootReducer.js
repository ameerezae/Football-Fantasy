import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import manageTeamReaducer from "./manageTeamReaducer";
import {searchReducer} from "./searchReducer"
import {dashboardReducer} from "./dashboardReducer";
import {statisticsReducer} from "./statisticsReducer";
import {gameReducer} from "./gameReducer"

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    searchReducer,
    manageTeamReaducer,
    dashboardReducer,
    statisticsReducer,
    gameReducer,
});

export default rootReducer;