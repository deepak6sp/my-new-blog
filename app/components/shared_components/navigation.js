import React,{ Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;

class Navigation extends Component {
    constructor(props){
      super(props);
    }
    _handleClose(){
      //document.querySelector("#menuClose").style.display = "none";
      //document.getElementById("navbar").classList.remove("navbar-collapse-secondary");
    }
    render(){
      return  (
      	<Navbar fixedTop id="navbar">
              {/* Brand and toggle get grouped for better mobile display */}
              <Navbar.Header>
                <Navbar.Brand>
                   <Link to="home">Deepak Prakash</Link>
                </Navbar.Brand>
                <FontAwesome className='menuClose' name='close' size='2x' onClick={this._handleClose}/>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse> 

              {/* Collect the nav links, forms, and other content for toggling */}
              <Nav pullRight>
                
                 <li>
                  <Link to="skills">SKILLS</Link>
                </li>

                 <li>
                  <Link to="projects">PROJECTS</Link>
                </li>

                <li>
                  <Link to="blog">BLOG</Link>
                </li>

                <li>
                  <Link to="contact">CONTACT</Link>
                </li>
              
              </Nav>
            </Navbar.Collapse>
      	</Navbar>
      );
    }
}

export default Navigation;
