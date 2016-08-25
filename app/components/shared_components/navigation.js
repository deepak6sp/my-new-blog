import React,{ Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;

class Navigation extends Component {
    constructor(props){
      super(props);
      this.state = {activeClass : ""};
    }
    _handleMenu(e){
      var links = document.querySelectorAll(".menuLinks a");
      var setActive = e.target.id;
      console.log(setActive);
      Array.prototype.map.call(links, function(e) {
          e.className = "";
          if (e.id == setActive)
              e.className = "active";
      })

      //document.querySelector("#menuClose").style.display = "none";
      //document.getElementById("navbar").classList.remove("navbar-collapse-secondary");
    }
    render(){
      return  (
      	<Navbar fixedTop id="navbar">
              {/* Brand and toggle get grouped for better mobile display */}
              <Navbar.Header>
                <Navbar.Brand className="menuLinks">
                   <Link to="home" id="link1" onClick={this._handleMenu}>Deepak Prakash</Link>
                </Navbar.Brand>
                <FontAwesome className='menuClose' name='close' size='2x' onClick={this._handleClose}/>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse> 

              {/* Collect the nav links, forms, and other content for toggling */}
              <Nav pullRight className="menuLinks">
                
                <li>
                  <Link to="projects" id="link2"  onClick={this._handleMenu} >WORK</Link>
                </li>

                <li>
                  <Link to="blog" id="link3"  onClick={this._handleMenu}>BLOG</Link>
                </li>

                 <li>
                  <Link to="about" id="link4" onClick={this._handleMenu}>ABOUT</Link>
                </li>

                <li>
                  <Link to="contact" id="link5" onClick={this._handleMenu}>CONTACT</Link>
                </li>
              
              </Nav>
            </Navbar.Collapse>
      	</Navbar>
      );
    }
}

export default Navigation;
