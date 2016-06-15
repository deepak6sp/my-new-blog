import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SplitBar = (props) => {
        return  (
        	 <Row >
                <Col sm={12} className="split-bar">
                    <Link to="blog">{props.text}
                        <FontAwesome className='super-crazy-colors' name={props.iconName} size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                    </Link>
                </Col>
            </Row>
        );
}

export default SplitBar;
