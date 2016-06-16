import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import {languages, libraries, collaboration, test} from "../variables/variables";

const list = (props) =>{
    return ( props.map( (element,index) => {
            return <li key={index}>{element}</li>
        })
    )
}

const ListSkills = () => {
	return(
		<Row className="skillSet">
			<Col xs={12} sm={6} md={3}>
	            <Panel header="Web languages">
	               {list(languages)}
	            </Panel>
	        </Col>

	        <Col xs={12} sm={6} md={3}>
	            <Panel header="Libraries / Frameworks">
	               {list(libraries)}
	            </Panel>
	        </Col>

	        <Col xs={12} sm={6} md={3}>
	            <Panel header="Collaboration">
	                {list(collaboration)}
	            </Panel>
	        </Col>

	        <Col xs={12} sm={6} md={3}>
	            <Panel header="Test Utilities">
	                {list(test)}
	            </Panel>
	        </Col>
	    </Row>
	)


}

export default ListSkills