//import axios from 'axios';
import React,{ Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl, Navbar, Glyphicon } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogPostsBasedOnSearchTerm } from '../actions/index';


class SearchBlog extends Component {
	constructor(props){
		super(props);
		this.state = {searchTerm:""};
	}

	handleChange(e) {
	    this.setState({ searchTerm: e.target.value });
	    this.props.getBlogPostsBasedOnSearchTerm(this.state.searchTerm);
	}

	searchFormSubmit(e){
		e.preventDefault();
		this.props.getBlogPostsBasedOnSearchTerm(this.state.searchTerm);
	}
	render() {
	    return (
	    	<form onSubmit={this.searchFormSubmit.bind(this)}>
		        <FormGroup>
		          	<FormControl type="text" placeholder="Search blog" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
		          	{/*<a class="btn btn-default" type="submit" onClick={this.handleChange.bind(this)}><FontAwesome name='search' /></a>*/}
		        </FormGroup>
			</form>
	    );
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ getBlogPostsBasedOnSearchTerm }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBlog);