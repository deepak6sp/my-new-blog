import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import RootReducer from './reducers/index';
import MainLayout from './components/MainLayout';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(RootReducer, {});

class Main extends React.Component {
    render() {
        return ( 
        	<MainLayout />
        );
    }
}
 
ReactDOM.render(<Provider store={store}>{AppRoutes}</Provider>,document.getElementById("main")); 