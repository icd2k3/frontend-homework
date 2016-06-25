import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as FooterContainerActions from './FooterContainerActions.js';
import {
    Button,
    Glyphicon,
    Grid
} from 'react-bootstrap';

import styles from './FooterContainer.css';

class FooterContainer extends React.Component {
    onRandomlyGenerateInvoicesClick() {
        this.props.dispatch(FooterContainerActions.randomlyGenerateInvoices());
    }

    onAddNewInvoiceClick() {
        this.props.dispatch(FooterContainerActions.addNewInvoice());
    }

    render() {
        return (
            <Grid className={styles.root} fluid>
                <Button className={`${styles.btn} ghost`} onClick={this.onAddNewInvoiceClick.bind(this)}>
                    <Glyphicon glyph="plus"/> Add New Invoice
                </Button>
                <Button className={`${styles.btn} ghost`} onClick={this.onRandomlyGenerateInvoicesClick.bind(this)}>
                    <Glyphicon glyph="random"/>
                    <span className={styles.randomText}>Randomly Generate Invoices</span>
                </Button>
            </Grid>
        );
    }
}

FooterContainer.displayName = 'FooterContainer';

FooterContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(FooterContainer);
