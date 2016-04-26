import React from 'react';

class BackgroundPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        $(this).scrollTop(0);
        var window_height=$(window).height();
        $(".blog-post-icon").click(function(){
            $('html, body').animate({scrollTop: window_height+2}, 1000);
        });
        $("#main-background-image").height(window_height);
        $(".main-background-overlay").height(window_height);
        $(window).resize(function(){
            $("#main-background-image").height(window_height);
            $(".main-background-overlay").height(window_height);
        }); 
    }
    render() {
        return  (
        	<header className="home-page-header">
	            <div className="main-background-overlay"></div>
	            <div id="main-background-image"></div>
	            <div className="row blog-post-header">
	                <div className="blog-post-icon">
	                    <div className="blog-text-1"><strong>Latest blog</strong></div>
	                </div>
	            </div> 
        	</header>
        );
    }
}

export default BackgroundPage;
