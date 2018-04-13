import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'


const createReducers = () => (
	combineReducers({
		routing: routerReducer
	})
);

export default createReducers
