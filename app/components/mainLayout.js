import React,{ Component} from 'react';
import ReactDOM from 'react-dom';


import Navigation from './shared_components/navigation';
import Footer from './shared_components/footer';

class MainLayout extends Component {
    constructor(props){
        super(props);
        this._handleScroll = this._handleScroll.bind(this);
    }
	 _handleScroll(){
        var navBar= document.getElementsByClassName("navbar")[0],
            bgImage = document.getElementsByClassName("home_bg")[0],
            range = 170,
            scrollTop = document.body.scrollTop;

        if (scrollTop > range) {
            navBar.classList.add("navbar-inverse");
            navBar.classList.remove("navbar-default");
            if(bgImage != undefined){
                bgImage.classList.add("blurred");
            }
        }
        else {
            navBar.classList.remove("navbar-inverse");
            navBar.classList.add("navbar-default");
            if(bgImage != undefined){
                bgImage.classList.remove("blurred");
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    }
    render() {
        return ( 
        	<div id="MainLayout">
	        	<Navigation />
        		{this.props.children}
        		<Footer />
        	</div>
        	
        );
    }
}

export default MainLayout;