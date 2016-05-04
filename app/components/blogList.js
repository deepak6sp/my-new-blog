import React from 'react';

class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
        	<main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="blog-posts-section">
                            <div className="blog-post">
                              <h1>Hello, world!</h1>
                              <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                              <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                            </div>
                            <div className="blog-post">
                              <h1>Hello, world!</h1>
                              <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                              <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                            </div>
                            <div className="blog-post">
                              <h1>Hello, world!</h1>
                              <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                              <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                            </div>
                            <div className="blog-post">
                              <h1>Hello, world!</h1>
                              <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                              <p><a className="btn btn-primary btn-small" href="#" role="button">Read more</a></p>
                            </div>
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

export default BlogList;
