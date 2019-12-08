import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import manageTeamReaducer from "./manageTeamReaducer";
import {searchReducer} from "./searchReducer"
import {dashboardReducer} from "./dashboardReducer";

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    searchReducer,
    manageTeamReaducer,
    dashboardReducer,
});

export default rootReducer;