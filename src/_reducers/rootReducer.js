import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import manageTeamReaducer from "./manageTeamReaducer";
import {searchReducer} from "./searchReducer"
import {dashboardReducer} from "./dashboardReducer";
import {statisticsReducer} from "./statisticsReducer";
import {gameReducer} from "./gameReducer"
import {cardsReducer} from "./cardsReducer";

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    searchReducer,
    manageTeamReaducer,
    dashboardReducer,
    statisticsReducer,
    gameReducer,
    cardsReducer,
});

export default rootReducer;