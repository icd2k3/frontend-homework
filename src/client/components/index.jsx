import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer/AppContainer.jsx';

import './index.css';

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
