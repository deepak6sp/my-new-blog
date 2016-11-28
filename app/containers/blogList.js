import axios from 'axios';
import React,{ Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import SearchBlog from './searchBlog';
import { getBlogPosts } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dotdotdot from 'react-dotdotdot'



class Blog extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);
        this.state= {blogLists: ""};
    }

    componentDidMount(){
        document.getElementById("navbar").style.background = "white";
    }

    componentWillMount() {
        this.props.getBlogPosts();
    }

    render() {
        let blogListData = "";
        if (!this.props.blogList){
           blogListData = "No blog posts available";
        }else if (this.props.blogList == ""){
           blogListData = "No blog posts matching search keyword";
        }else{
            blogListData  = this.props.blogList.map((blog,index) => {
              return (<div className="blog-post" key={index}>
                        <h1>{blog.title}</h1>
                        <Dotdotdot clamp={4}>
                          <div dangerouslySetInnerHTML={ {__html: blog.content} } ></div>
                        </Dotdotdot>
                        <p><Button bsStyle="primary"><Link to={"/blog/"+blog.slug}> read more </Link></Button></p>
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
                  {/*
                  <Col sm={3} className="latest-post-section">
                        <h1>Whats new</h1>
                        { WhatsNewData }
                  </Col>
                */}
              </Row>
            </div>

          </main>
        );
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
