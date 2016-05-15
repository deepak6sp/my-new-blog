// const BASE_URL = "http://localhost:7000/api";

// let result = [];
// $.ajax({
// 	method: "GET",
// 	url: BASE_URL,
// 	dataType: 'json',
// 	success: function (data){
// 		state = data;
// 		result = data;
// 	}.bind(this),
// 	 error: function(xhr, status, err) {
// 	 	console.error("could not fetch data");
// 	 }.bind(this)
// });
// let BlogListReducer = () => {
// 	// console.log("result");
// 	// console.log(result);
// 	// return result;
// 	return [
// 		{title: 'post1', content: 'post1 details'},
// 		{title: 'post2', content: 'post2 details'},
// 		{title: 'post3', content: 'post3 details'},
// 		{title: 'post4', content: 'post4 details'}

// 	]
// }

// let BlogListReducer = (state = null,action) => {
// 	switch(action.type){
// 		case 'GET_BLOG_POSTS' : 
// 			console.log(action.payload);
// 			return action.payload;
// 		default :
// 			return state;
// 	}
	
// }
 
//export default BlogListReducer;
