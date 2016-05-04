import { combineReducers } from 'redux';
import mainBlogPageReducer from './reducer_mainBlogPage';

const rootReducer =  combineReducers({
	mainBlog : mainBlogPageReducer

});

export default rootReducer;