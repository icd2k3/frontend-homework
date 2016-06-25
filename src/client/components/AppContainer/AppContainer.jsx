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
                <HeaderContainer
                    sortParam={this.props.InvoicesContainerReducer.get('sortParam')}
                    sortOrder={this.props.InvoicesContainerReducer.get('sortOrder')}
                />
                <InvoicesContainer InvoicesContainerReducer={this.props.InvoicesContainerReducer}/>
                <FooterContainer/>
                <PopupContainer PopupContainerReducer={this.props.PopupContainerReducer}/>
            </Grid>
        );
    }
}

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
    InvoicesContainerReducer: ImmutablePropTypes.mapContains({
        invoices: ImmutablePropTypes.list
    }).isRequired,
    PopupContainerReducer: ImmutablePropTypes.mapContains({
        activePopups: ImmutablePropTypes.mapContains({
            createOrEditInvoicePopup: PropTypes.bool.isRequired
        }).isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        InvoicesContainerReducer: state.get('InvoicesContainerReducer'),
        PopupContainerReducer: state.get('PopupContainerReducer')
    };
}

export default connect(mapStateToProps)(AppContainer);
