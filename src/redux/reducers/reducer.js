import {combineReducers} from 'redux';
import indexReducer from '../index';

const combinedReducer = combineReducers({indexReducer});

export default combinedReducer;
