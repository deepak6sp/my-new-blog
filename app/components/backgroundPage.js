import React from 'react';

class BackgroundPage extends React.Component {
    constructor(props) {
        super(props);
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
