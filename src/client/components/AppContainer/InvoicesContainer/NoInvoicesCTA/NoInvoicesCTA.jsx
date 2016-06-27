import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as NoInvoicesCTAActions from './NoInvoicesCTAActions.js';
import {
    Button,
    Glyphicon,
    Jumbotron
} from 'react-bootstrap';

import styles from './NoInvoicesCTA.css';

export default class NoInvoicesCTA extends React.Component {
    onAddNewInvoiceClick() {
        this.props.dispatch(NoInvoicesCTAActions.addNewInvoice());
    }

    onRandomlyGenerateInvoicesClick() {
        this.props.dispatch(NoInvoicesCTAActions.randomlyGenerateInvoices());
    }

    render() {
        return (
            <Jumbotron className={styles.root}>
                <h1>Hey There</h1>
                <p>Looks like you haven't created any invoices yet! Get started by clicking one of the options below</p>
                <Button className={styles.btn} onClick={this.onAddNewInvoiceClick.bind(this)}>
                    <Glyphicon glyph="plus"/> Add New Invoice
                </Button>
                or
                <Button className={styles.btn} onClick={this.onRandomlyGenerateInvoicesClick.bind(this)}>
                    <Glyphicon glyph="random"/> Randomly Generate Invoices
                </Button>
            </Jumbotron>
        );
    }
}

NoInvoicesCTA.displayName = 'NoInvoicesCTA';

NoInvoicesCTA.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(NoInvoicesCTA);
