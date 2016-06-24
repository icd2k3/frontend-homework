import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import store from 'store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer/AppContainer.jsx';

import 'react-widgets/dist/css/react-widgets.css';
import './index.css';

// init datePicker localizer
momentLocalizer(moment);

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
