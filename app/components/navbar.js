import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
        	<nav className="navbar navbar-default">
              <div className="container-fluid">
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
                  <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search my blog" />
                    </div>
                  </form>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Blog<span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                    
                  </ul>
                </div>
              </div>
        	</nav>
        );
    }
}

export default Navbar;
