import { combineReducers } from 'redux';
import BlogListReducer from './reducer_blogList';
import whatsNewListReducer from './reducer_whatsNewList';

const RootReducer =  combineReducers({
	//blogLists : BlogListReducer,
	whatsNewLists : whatsNewListReducer


});

export default RootReducer;