import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const socialLinks=[{
                    "name":"twitter",
                    "url":"https://twitter.com/deepak6sp"
                },
                {
                    "name":"github",
                    "url":"https://github.com/deepak6sp"
                },
                {
                    "name":"stackoverflow",
                    "url":"http://stackoverflow.com/users/3713726/d-pac"
                },
                {
                    "name":"linkedIn",
                    "url":"https://au.linkedin.com/in/deepak-prakash-a1bb2825"
                }];

class SocialLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialLinks: socialLinks
        };
    }
    render() {
        let SLinks = this.state.socialLinks.map(function(slink,index){
                return (
                    <a target="_blank" key={index} className={slink.name} href={slink.url}>{slink.name}</a>
                );
        });
        return  (
			<div className="social-links">
                {SLinks}
			</div>
        );
    }
}

export default SocialLinks;
