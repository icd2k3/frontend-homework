import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as InvoiceFormEditOptionsPaymentStatusActions from './InvoiceFormEditOptionsPaymentStatusActions.js';
import {
    ControlLabel,
    DropdownButton,
    FormGroup,
    Glyphicon,
    MenuItem
} from 'react-bootstrap';

import styles from './InvoiceFormEditOptionsPaymentStatus.css';

class InvoiceFormEditOptionsPaymentStatus extends React.Component {

    onSelect(paymentStatus) {
        this.props.dispatch(InvoiceFormEditOptionsPaymentStatusActions.change(paymentStatus));
    }

    render() {
        const isUnpaid = !this.props.paymentStatus || this.props.paymentStatus === 'unpaid';

        return (
            <FormGroup controlId="paymentStatus">
                <ControlLabel>Payment Status</ControlLabel>
                <div>
                    <DropdownButton
                        bsStyle={isUnpaid ? 'danger' : 'success'}
                        id="status-dropdown"
                        onSelect={this.onSelect.bind(this)}
                        title={
                            <span>
                                <Glyphicon className={styles.glyphicon} glyph={isUnpaid ? 'alert' : 'ok'}/> {`${this.props.paymentStatus.charAt(0).toUpperCase()}${this.props.paymentStatus.slice(1)}`}
                            </span>
                        }
                    >
                        <MenuItem className={styles.menuUnpaid} eventKey="unpaid">
                            <Glyphicon glyph="alert"/> Unpaid
                        </MenuItem>
                        <MenuItem className={styles.menuPaid} eventKey="paid">
                            <Glyphicon glyph="ok"/> Paid
                        </MenuItem>
                    </DropdownButton>
                </div>
            </FormGroup>
        );
    }
}

InvoiceFormEditOptionsPaymentStatus.displayName = 'InvoiceFormEditOptionsPaymentStatus';

InvoiceFormEditOptionsPaymentStatus.propTypes = {
    dispatch: PropTypes.func.isRequired,
    paymentStatus: PropTypes.string
};

export default connect(() => {
    return {};
})(InvoiceFormEditOptionsPaymentStatus);
