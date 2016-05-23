import axios from 'axios';
export const GET_BLOG_POSTS = 'GET_BLOG_POSTS';
export const GET_SEARCH_BASED_BLOG_POSTS = 'GET_SEARCH_BASED_BLOG_POSTS';

export function getBlogPosts(){
	const response = axios.get('/api/blogPostList');
    return({
    	type : GET_BLOG_POSTS,
		payload : response
    });
}  

export function getBlogPostsBasedOnSearchTerm(searchTerm){
	const response = axios.get("/api/search?"+"searchTerm="+searchTerm);
    return({
    	type : GET_SEARCH_BASED_BLOG_POSTS,
		payload : response
    });
}