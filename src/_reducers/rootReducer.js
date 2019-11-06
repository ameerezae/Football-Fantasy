import { combineReducers } from 'redux';
import formatReducer from "./formatReducer";
import { authReducer } from './authReducer';
import {searchReducer} from "./searchReducer"

const rootReducer = combineReducers({
    authReducer,
    formatReducer,
    searchReducer,
});

export default rootReducer;