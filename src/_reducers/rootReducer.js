import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import manageTeamReaducer from "./manageTeamReaducer";
import {searchReducer} from "./searchReducer"
import {dashboardReducer} from "./dashboardReducer";
import {statisticsReducer} from "./statisticsReducer";
import {gameReducer} from "./gameReducer";
import {gameDetailReducer} from "./gameDetailReducer";
import {leaderBoardReducer} from "./leaderBoardReducer";

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    searchReducer,
    manageTeamReaducer,
    dashboardReducer,
    statisticsReducer,
    gameReducer,
    gameDetailReducer,
    leaderBoardReducer,
});

export default rootReducer;