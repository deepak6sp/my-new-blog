import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button} from 'react-bootstrap';
import ReactTinymce from 'react-tinymce';

import { postBlogContents } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Admin extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);
        this.state = { blogContent : ""};
    }
    _handleEditorChange(e) {
    	if (e.target.getContent() != ""){
    		this.setState({blogContent : e.target.getContent()});
    	} else {
    		//console.log("this is a new documnet");
    		this.setState({blogContent : " "});
    	}
	    
	}
	_saveForm(e){
		e.preventDefault();
		//console.log("-------");
		//console.log(this.state.blogContent);
		this.props.postBlogContents(this.state.blogContent);
	}

    render() {
        return  (
	        	<main id="admin">
	        		<Row className="container container-fluid">
	        			<Col sm={12}>
	        				<h2>Insert blog contents here</h2>
	        				<form id="blogForm" onSubmit = {this._saveForm.bind(this)}>
		        				<ReactTinymce
							        content="Enter content here"
							        config={{
							          height: 300,
							          plugins: 'autolink link image lists print preview',
							          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
							        }}
							        onChange={this._handleEditorChange.bind(this)}
							    />
						    	<Button type="submit">Save</Button>
						    </form>
			        	</Col>
					</Row>
				</main>
        );
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postBlogContents }, dispatch);
}

export default connect(null,mapDispatchToProps)(Admin);
