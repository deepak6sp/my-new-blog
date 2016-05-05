import React,{ Component } from 'react';

const window_resize = () => {
    let window_height=$(window).height();
    $("#main-background-image").height(window_height);
    $(".main-background-overlay").height(window_height);
}

class BackgroundPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $(this).scrollTop(0);
        let window_height=$(window).height();
        $(".blog-post-icon").click(function(){
            $('html, body').animate({scrollTop: window_height+2}, 1000);
        });
        window_resize();
        $(window).resize(function(){
            window_resize();
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
