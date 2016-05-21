import axios from 'axios';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'react-bootstrap';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state= {blogLists: ""};
    }
    componentWillMount() {
        axios.get('http://localhost:7000/api')
        .then(response => {
            this.setState ({ blogLists : response.data});
        });
    }
    render() {
        let blogListData = "";
        if (!this.state.blogLists){
           blogListData = "No blog posts available";
        }
        else{
            blogListData  = this.state.blogLists.map((blog,index) => {
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
        	<main>
            <div className="container-fluid">
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


function mapStateToProps(state){
  return {
    blogList : state.blogLists,
    whatsNewList : state.whatsNewLists
  };
}


export default connect(mapStateToProps)(Blog);

