import { combineReducers } from 'redux';
import BlogListReducer from './reducer_blogList';
import whatsNewListReducer from './reducer_blogList';

const rootReducer =  combineReducers({
	blogLists : BlogListReducer,
	whatsNewLists : whatsNewListReducer


});

export default rootReducer;