import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    auth : authReducer,
    format : formatReducer,
});

export default rootReducer;