import axios from 'axios';
import React,{ Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import SearchBlog from './searchBlog';
import { getBlogPosts } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Blog extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);
        this.state= {blogLists: ""};
    }
    componentWillMount() {
        this.props.getBlogPosts();
    }
    render() {
        let blogListData = "";
        if (!this.props.blogList){
           blogListData = "No blog posts available";
        }
        else if (this.props.blogList == ""){
           blogListData = "No blog posts matching search keyword";
        }
        else{
            blogListData  = this.props.blogList.map((blog,index) => {
              return (<div className="blog-post" key={index}>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                        <p><Button bsStyle="primary">read more</Button></p>
                      </div>);
            });
        }
        let WhatsNewData = this.props.whatsNewList.map((WhatsNew,index) => {
          return (<p key={index}>{WhatsNew.title}</p>);
        }); 
        return  (
        	<main id="blog">
            <div className="container-fluid container">
              <Row>
                <Col sm={4} className="blog-posts-search">
                  <SearchBlog />
                </Col>
              </Row>
              <Row>
                  <Col sm={9} className="blog-posts-section">
                       { blogListData }
                  </Col>
                  <Col sm={3} className="latest-post-section">
                        <h1>Whats new</h1>
                        { WhatsNewData }
                  </Col>
              </Row>
            </div>
          </main>
        );
        //return <div>adsasd</div>;
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getBlogPosts }, dispatch);
}


function mapStateToProps(state){
  return {
    blogList : state.blogLists,
    whatsNewList : state.whatsNewLists
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Blog);

