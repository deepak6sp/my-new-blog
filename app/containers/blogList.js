import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let blogListData  = this.props.blogList.map((blog,index) => {
          return (<div className="blog-post" key={index}>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    <p><Button bsStyle="primary">Success</Button></p>
                  </div>);
        });
        let WhatsNewData = this.props.whatsNewList.map((WhatsNew,index) => {
          return (<p key={index}>{WhatsNew.title}</p>);
        });
        return  (
        	<main>
            <div className="container-fluid">
                <Row>
                    <Col sm={9} className="blog-posts-section">
                         {blogListData}
                    </Col>
                    <Col sm={3} className="latest-post-section">
                          <h1>Whats new</h1>
                          {WhatsNewData}
                    </Col>
                </Row>
            </div>
          </main>
        );
    }
}

function mapStateToProps(state){
  return {
    blogList : state.blogLists,
    whatsNewList : state.whatsNewLists
  };
}


export default connect(mapStateToProps)(BlogList);
