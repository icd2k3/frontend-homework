import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import {
	Grid
} from 'react-bootstrap';
import HeaderContainer from './HeaderContainer/HeaderContainer.jsx';
import InvoicesContainer from './InvoicesContainer/InvoicesContainer.jsx';
import FooterContainer from './FooterContainer/FooterContainer.jsx';
import PopupContainer from './PopupContainer/PopupContainer.jsx';

import styles from './AppContainer.css';

export default class AppContainer extends React.Component {
    render() {
        return (
            <Grid className={styles.root} fluid>
                <div className={`${styles.content} ${this.props.PopupContainerReducer.get('activePopups').size ? styles.popupOnScreen : ''}`}>
                    <HeaderContainer
                        sortOrder={this.props.InvoicesContainerReducer.get('sortOrder')}
                        sortParam={this.props.InvoicesContainerReducer.get('sortParam')}
                    />
                    <InvoicesContainer InvoicesContainerReducer={this.props.InvoicesContainerReducer}/>
                    <FooterContainer/>
                </div>
                <PopupContainer PopupContainerReducer={this.props.PopupContainerReducer}/>
            </Grid>
        );
    }
}

AppContainer.displayName = 'AppContainer';

// specify which reducer data is expected at this layer in the component tree and send to children
AppContainer.propTypes = {
    InvoicesContainerReducer: ImmutablePropTypes.mapContains({
        invoices: ImmutablePropTypes.list
    }).isRequired,
    PopupContainerReducer: ImmutablePropTypes.mapContains({
        activePopups: ImmutablePropTypes.map.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

// convert state into properties for this component
function mapStateToProps(state) {
    return {
        InvoicesContainerReducer: state.get('InvoicesContainerReducer'),
        PopupContainerReducer: state.get('PopupContainerReducer')
    };
}

// connects a component to a Redux store
export default connect(mapStateToProps)(AppContainer);
