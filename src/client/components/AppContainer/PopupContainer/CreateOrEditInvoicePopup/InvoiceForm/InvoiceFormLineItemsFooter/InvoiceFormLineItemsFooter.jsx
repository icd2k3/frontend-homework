import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { convertNumberToCurrency } from 'utils';
import * as InvoiceFormLineItemsFooterActions from './InvoiceFormLineItemsFooterActions.js';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';

import styles from './InvoiceFormLineItemsFooter.css';

class InvoiceFormLineItemsFooter extends React.Component {
    componentWillMount() {
        if (!this.props.hasLineItems) {
            this.props.dispatch(InvoiceFormLineItemsFooterActions.add());
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <Button
                    bsSize="small"
                    bsStyle={this.props.error ? 'danger' : 'primary'}
                    className="ghost"
                    onClick={this.props.dispatch.bind(this, InvoiceFormLineItemsFooterActions.add())}
                >
                    <Glyphicon glyph="plus"/> Add New Line Item
                </Button>
                <div className={styles.total}>
                    Grand Total: ${convertNumberToCurrency(this.props.total)}
                </div>
            </div>
        );
    }
}

InvoiceFormLineItemsFooter.displayName = 'InvoiceFormLineItemsFooter';

InvoiceFormLineItemsFooter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.bool,
    hasLineItems: PropTypes.bool,
    total: PropTypes.number
};

export default connect(() => {
    return {};
})(InvoiceFormLineItemsFooter);
