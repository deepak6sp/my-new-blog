import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<div className="container-fluid contact-page">
        		<div className="row">
        			<div className="col-sm-12 col-md-8">
        				<h1>Got a project ? or drop me a line ?</h1>
		        		<form>
		        			<div className="form-group">
							    <label for="name">Name</label>
							    <input type="text" className="form-control" id="name" placeholder="Enter name" />
							</div>
							<div className="form-group">
							    <label for="email">Email address</label>
							    <input type="email" className="form-control" id="email" placeholder="Enter email" />
							</div>
							<div className="form-group">
							    <label for="message">Message</label>
							    <textarea rows="6" type="text" className="form-control" id="message" placeholder="Enter your mesage" />

							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
					<div className="col-sm-12 col-md-offset-1 col-md-3">
						<h1>Get in touch</h1>
						<p>You can also contact me at</p>
						<p>0422596332</p>
						<p>deepak6sp@gmail.com</p>
					</div>
				</div>
			</div>
        );
    }
}

export default Contact;
