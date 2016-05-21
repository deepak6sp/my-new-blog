//import axios from 'axios';
import React,{ Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { Row, Col, Button, FormGroup, FormControl, Navbar, Glyphicon } from 'react-bootstrap';
//import { FontAwesome } from 'react-fontawesome';
import FontAwesome from 'react-fontawesome';
import { getBlogPostsBasedOnSearchTerm } from '../actions/index';


class SearchBlog extends Component {
	constructor(props){
		super(props);
		this.state = {searchTerm:""};
	}

	handleChange(e) {
	    this.setState({ searchTerm: e.target.value });
	}
	searchFormSubmit(e){
		e.preventDefault();
		getBlogPostsBasedOnSearchTerm();
	    console.log(this.state.searchTerm);
	}
	render() {
	    return (
	    	<form onSubmit={this.searchFormSubmit.bind(this)}>
		      	<Navbar.Form pullLeft>
			        <FormGroup>
			          	<FormControl type="text" placeholder="Search blog" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
			          	<a class="btn btn-default" type="submit"><FontAwesome name='search' /></a>
			        </FormGroup>
			    </Navbar.Form>
			</form>
	    );
	}
}

export default SearchBlog;