import React,{ Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;

const Navigation = () => {
        return  (
        	<Navbar inverse fixedTop>
              <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">DSP</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                {/* Collect the nav links, forms, and other content for toggling */}
                <Navbar.Collapse>
                  <Nav pullRight>
                    <li>
                      <ScrollLink activeClass="home" to="home" spy={true} smooth={true} offset={0} duration={500}>
                         Home
                      </ScrollLink>
                    </li>
                    
                    <li>
                      <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-95} duration={500}>About</ScrollLink>
                    </li>

                    <li>
                      <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-95} duration={500}>Skills</ScrollLink>
                    </li>

                    <li>
                      <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-95} duration={500}>Contact</ScrollLink>
                    </li>

                    <li>
                      <ScrollLink activeClass="blog" to="blog" spy={true} smooth={true} offset={-95} duration={500}>
                        <FontAwesome className='super-crazy-colors' name="mail-forward" size='lg'/>
                        Blog
                      </ScrollLink>
                    </li>
                  </Nav>
                  
                </Navbar.Collapse>

                
               
              </div>
        	</Navbar>
        );
}

export default Navigation;
