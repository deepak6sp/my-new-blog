import React from 'react';
import Navbar from 'components/Navbar';

class Main extends React.Component {
    render() {
        return <Navbar />;
    }
}

React.render("<Main />",document.getElementByID("navbar"));
