import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

class Main extends React.Component {
    render() {
        return <Navbar />;
    }
}

ReactDOM.render(<Main />,document.getElementById("navbar")); 