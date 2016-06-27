import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import store from 'store';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer/AppContainer.jsx';

// global styles (individual component styles are grouped in component tree)
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
            // provider https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
