import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


const Testimonial = (props) => {
    return  (
    	<section className="testimonial">
            <Row className="container container-fluid">
                <Col sm={6} smOffset={3} >
                    <h4 className="quotation">
                    	<FontAwesome className='super-crazy-colors' name="quote-left" size='2x'/>
                    	<span>{props.text}</span>
                    </h4>
                    <h4 className="recommendation"> {props.recommendedBy} </h4>
                </Col>
            </Row>
        </section>
    );
}

export default Testimonial;
