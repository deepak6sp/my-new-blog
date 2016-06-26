import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SplitBar = (props) => {
        return  (
        	 <Row >
                <Col sm={12} className="split-bar">
                    <Link to="#">
                        <FontAwesome className='super-crazy-colors' name={props.iconName} size='lg'/>
                         {props.text}
                    </Link>
                </Col>
            </Row>
        );
}

export default SplitBar;
