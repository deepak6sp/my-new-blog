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
                     <Link to="home">Deepak Prakash</Link>
                  </Navbar.Brand>
                  {/*<Navbar.Toggle />*/}
                </Navbar.Header>

                {/* Collect the nav links, forms, and other content for toggling */}
                  <Nav pullRight>
                    <li>
                      <Link to="blog">BLOG</Link>
                    </li>
                    {/*
                <Navbar.Collapse> </Navbar.Collapse>

                    <li>
                      <Link to="contact">CONTACT</Link>
                    </li>
                  */}
                  </Nav>
                  
               

                
               
              </div>
        	</Navbar>
        );
}

export default Navigation;
