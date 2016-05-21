import axios from 'axios';
export const GET_BLOG_POSTS = 'GET_BLOG_POSTS';

export function getBlogPosts(){
	return dispatch => {
		axios.get('http://localhost:7000/api')
        .then(response => {
           dispatch({
				type : GET_BLOG_POSTS,
				payload : response.data
			});
        });
		
	}; 
}  

export function getBlogPostsBasedOnSearchTerm(){
	alert("getBlogPostsBasedOnSearchTerm");
}