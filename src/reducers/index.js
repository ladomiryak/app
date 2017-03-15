import { combineReducers } from 'redux';
import dishesList  from './dishesForm';
import admin  from './admin';

const rootReducer = combineReducers({
    dishesList,
    admin
});

export default rootReducer;