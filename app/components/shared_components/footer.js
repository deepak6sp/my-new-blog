import React,{ Component } from 'react';
import SocialLinks from './socialLinks';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<footer className="footer">
                <center>
                    <SocialLinks />
                </center>
			</footer>
        );
    }
}

export default Footer;
