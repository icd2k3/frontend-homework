import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as InvoiceFormEditOptionsPaymentStatusActions from './InvoiceFormEditOptionsPaymentStatusActions.js';
import {
    ControlLabel,
    DropdownButton,
    FormGroup,
    MenuItem
} from 'react-bootstrap';

class InvoiceFormEditOptionsPaymentStatus extends React.Component {

    onSelect(paymentStatus) {
        this.props.dispatch(InvoiceFormEditOptionsPaymentStatusActions.change(paymentStatus));
    }

    render() {
        return (
            <FormGroup controlId="paymentStatus">
                <ControlLabel>Payment Status</ControlLabel>
                <div>
                    <DropdownButton
                        id="status-dropdown"
                        onSelect={this.onSelect.bind(this)}
                        title={`${this.props.paymentStatus.charAt(0).toUpperCase()}${this.props.paymentStatus.slice(1)}`}
                    >
                        <MenuItem eventKey="unpaid">Unpaid</MenuItem>
                        <MenuItem eventKey="paid">Paid</MenuItem>
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
