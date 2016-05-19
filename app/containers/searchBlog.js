//import axios from 'axios';
import React,{ Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { Row, Col, Button, FormGroup, FormControl, Navbar, Glyphicon } from 'react-bootstrap';
//import { FontAwesome } from 'react-fontawesome';
var FontAwesome = require('react-fontawesome');

class SearchBlog extends Component {
	constructor(props){
		super(props);
		this.state = {value:""};
	}
	getValidationState() {
	    const length = this.state.value.length;
	    // if (length > 10) return 'success';
	    // else if (length > 5) return 'warning';
	    // else if (length > 0) return 'error';
	}

	handleChange(e) {
	    this.setState({ value: e.target.value });
	}

	render() {
	    return (
	      	<Navbar.Form pullLeft>
		        <FormGroup>
		          	<FormControl type="text" placeholder="Search" />
		          	<a class="btn btn-default" type="submit"><FontAwesome name='search' /></a>
		        </FormGroup>
		    </Navbar.Form>
	    );
	}
}

export default SearchBlog;