import { combineReducers } from "redux";

import appReducer from './reducer';
import StateType from 'typesafe-actions';

const rootReducer = combineReducers({
    reducer:appReducer
})
export default rootReducer;
//export AppState = StateType.StateType<typeof rootReducer>;