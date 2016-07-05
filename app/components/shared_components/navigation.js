import React,{ Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;

const Navigation = () => {
        return  (
        	<Navbar fixedTop>
              <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <Navbar.Header>
                  <Navbar.Brand>
                     <ScrollLink activeClass="home" to="home" spy={true} smooth={true} offset={0} duration={500}>Deepak Prakash</ScrollLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                {/* Collect the nav links, forms, and other content for toggling */}
                <Navbar.Collapse>
                  <Nav pullRight>
                    <li>
                      <Link to="home">Home</Link>
                    </li>

                    <li>
                      <Link to="blog">
                        <FontAwesome className='super-crazy-colors' name="mail-forward" size='lg'/>
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </Nav>
                  
                </Navbar.Collapse>

                
               
              </div>
        	</Navbar>
        );
}

export default Navigation;
