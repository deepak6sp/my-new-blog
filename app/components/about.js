import React,{ Component } from 'react';
import { Row,Col } from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<div className="container-fluid about">
        		<Row>
        			<Col sm={12}>
        				<h1>About this blog</h1>
        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
        			</Col>
        		</Row>
        		<Row>
        			<Col sm={12}>
        				<h1>About me</h1>
        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
        			</Col>
        		</Row>
				<Row>
        			<Col sm={12}>
        				<h1>Resume (Download pdf)</h1>
        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
        			</Col>
        		</Row>
			</div>
        );
    }
}

export default About;
