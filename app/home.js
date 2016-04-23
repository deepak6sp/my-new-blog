$(document).ready(function(){
    $(this).scrollTop(0);
    var window_height=$(window).height();
    $(".blog-post-icon").click(function(){
    	$('html, body').animate({scrollTop: window_height+2}, 1000);
    });
    window_resize();
    $(window).resize(function(){
    	window_resize();
    });
   
});  


function window_resize(){
	var window_height=$(window).height();
	$("#main-background-image").height(window_height);
	$(".main-background-overlay").height(window_height);
}
