import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
});

export default rootReducer;