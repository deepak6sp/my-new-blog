import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<div className="about">
	        	<div className="container-fluid">
	        		<div className="row">
	        			<div className="col-sm-12">
	        				<h1>About this blog</h1>
	        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
	        			</div>
	        		</div>
	        		<div className="row">
	        			<div className="col-sm-12">
	        				<h1>About me</h1>
	        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
	        				<h1>Resume (download PDF)</h1>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default About;
