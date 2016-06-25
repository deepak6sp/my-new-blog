import React,{ Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Navbar = () => {
        return  (
        	<nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">DSP</a>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                      <Link to="home">
                        <FontAwesome className='super-crazy-colors' name="home" size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                         Home
                      </Link>
                    </li>
                    <li>
                      <Link to="blog">
                        <FontAwesome className='super-crazy-colors' name="tags" size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                        Blog
                      </Link>
                    </li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    
                  </ul>
                </div>
              </div>
        	</nav>
        );
}

export default Navbar;
