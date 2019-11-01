import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import manageTeamReaducer from "./manageTeamReaducer";
const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    manageTeamReaducer
});

export default rootReducer;