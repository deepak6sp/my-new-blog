import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<div id="about" className="container-fluid">
        		<Row>
        			<Col sm={12}>
        				<h3>About this blog</h3>
        				<p>This blog is developed using MERN(Mongo, Express, Redux (React), Node) stack. </p>
        			</Col>
        		</Row>
        		<Row>
        			<Col sm={12}>
        				<h3>About me</h3>
        				<p>I am a freelance web Developer. I develop with skills of minimal usability designs and using core XHTML/HTML5, CSS3 and Javascript but not limited to using frameworks such as Foundation, Bootstrap, React and Angular
                        for single page applications. Have worked on PHP frameworks and have knowledge of ruby on rails. I love node technologies and how the way they have reformed the full stack development. I am ready to work on 
                        node technologies, to continously learn and contribute. I have passion for what i do, love web technologies, and hope to do this forever.</p>
        			</Col>
        		</Row>  
				<Row>
        			<Col sm={12}>
        				<h3>Resume (Download pdf)</h3>
        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
        			</Col>
        		</Row>
			</div>
        );
    }
}

export default About;
