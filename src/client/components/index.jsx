import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import store from 'store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer/AppContainer.jsx';

import 'react-widgets/dist/css/react-widgets.css';
import './common/styles/global/core.css';
import './common/styles/global/buttons.css';
import './common/styles/global/modals.css';
import './common/styles/global/forms.css';
import './common/styles/global/dropdowns.css';
import './common/styles/global/labels.css';
import './common/styles/global/icons.css';

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
