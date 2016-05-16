import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class SocialLinks extends Component {
    constructor(props) {
        super(props);
        const socialLinks=["github","stackoverflow","twitter"];
    }
    render() {
        return  (
			<div className="social-links">
				<span className="github">github</span>
				<span className="stackoverflow">stackoverflow</span>
				<span className="twitter">twitter</span>
			</div>
        );
    }
}

export default SocialLinks;
