import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const socialLinks=[{
                    "name":"twitter",
                    "url":"https://twitter.com/deepak6sp",
                    "icon": "twitter"
                },
                {
                    "name":"github",
                    "url":"https://github.com/deepak6sp",
                    "icon": "github"
                },
                {
                    "name":"stackoverflow",
                    "url":"http://stackoverflow.com/users/3713726/d-pac",
                    "icon" : "stack-overflow"
                },
                {
                    "name":"linkedin",
                    "url":"https://au.linkedin.com/in/deepak-prakash-a1bb2825",
                    "icon": "linkedin"
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
                    <a target="_blank" key={index} className={slink.name} href={slink.url}>
                        <i className={"fa fa-"+slink.icon}/>
                    </a>
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
