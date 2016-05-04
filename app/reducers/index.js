import { combineReducers } from 'redux';
import blogListReducer from './reducer_mainBlogPage';

const rootReducer =  combineReducers({
	blogLists : blogListReducer

});

export default rootReducer;