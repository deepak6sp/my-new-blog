import React,{ Component } from 'react';
import { connect } from 'react-redux';

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    /*
     list(){
        return this.props.blogList.map((blog) => {
          return (<div className="blog-post">
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
                  <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                </div>);
        });
     }
     */
    render() {
        var blogListData  = this.props.blogList.map((blog,index) => {
          return (<div className="blog-post" key={index}>
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
                  <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                </div>);
        });
        return  (
        	<main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="blog-posts-section">
                           {blogListData}
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="latest-post-section">
                            <h1>Whats new</h1>
                            <p>This is my lastest post one ... </p>
                            <p>This is my lastest post one ... </p>
                            <p>This is my lastest post one ... </p>
                        </div>
                    </div>
                </div>
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
