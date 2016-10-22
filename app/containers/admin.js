import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, FormControl} from 'react-bootstrap';
import ReactTinymce from 'react-tinymce';

import { postBlogContents } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Admin extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);
        this.state = { blogTitle:"", blogSlug:"", blogContent : ""};
    }
    _handleTitleChange(e){
      if (e.target == ""){
        alert("title is empty");
      } else {
        this.setState({blogTitle: e.target.value });
        var slugTarget =  e.target.value;
        this.setState({blogSlug: slugTarget.replace(/\s/g, '')});
      }
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
		if(this.state.blogTitle == ""){
      alert("title field is empty");
    } else if (this.state.blogContent == ""){
      alert("content field is empty");
    } else{
		    this.props.postBlogContents(this.state.blogTitle, this.state.blogSlug, this.state.blogContent);
    }
	}

    render() {
        return  (
	        	<main id="admin">
	        		<Row className="container container-fluid">
	        			<Col sm={12}>
	        				<form id="blogForm" onSubmit = {this._saveForm.bind(this)}>
                    <h2>Insert blog title here</h2>
                    <FormControl type="text" name="title" value={this.state.blogTitle} onChange={this._handleTitleChange.bind(this)} placeholder="Enter blog title"/>
                    <h2>Insert blog contents here</h2>
		        				<ReactTinymce
							        content="Enter content here"
							        config={{
							          height: 300,
							          plugins: 'autolink link image lists print preview code',
							          toolbar: 'code undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent'
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
