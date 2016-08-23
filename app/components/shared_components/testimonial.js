import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


const Testimonial = (props) => {
    return  (
    	<section className="testimonial">
            <div className="container container-fluid">
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h4 className="quotation">
                        	<FontAwesome className='super-crazy-colors' name="quote-left" size='2x'/>
                        	<span>{props.text}</span>
                        </h4>
                        <h4 className="recommendation"> {props.recommendedBy} </h4>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Testimonial;
