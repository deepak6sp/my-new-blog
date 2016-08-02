import React,{ Component } from 'react';
import SocialLinks from './socialLinks';

const Footer = () => {
    return  (
    	<footer className="footer">
            <center>
                <SocialLinks />
                <p>© Copyright 2016 Deepak Prakash. All rights reserved.</p>
            </center>
		</footer>
    );
}

export default Footer;
