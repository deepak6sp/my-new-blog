import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SplitBar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	 <Row >
                <Col sm={12} className="split-bar">
                    <a href={this.props.link}>{this.props.text}
                    <FontAwesome className='super-crazy-colors' name='arrow-circle-right' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        /></a>
                </Col>
            </Row>
        );
    }
}

export default SplitBar;
