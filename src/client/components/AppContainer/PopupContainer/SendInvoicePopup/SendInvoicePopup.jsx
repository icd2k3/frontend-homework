import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import * as SendInvoicePopupActions from './SendInvoicePopupActions.js';
import {
    Button,
    Glyphicon,
    Modal
} from 'react-bootstrap';
import InvoicePreview from './InvoicePreview/InvoicePreview.jsx';
import SendInvoiceRecipientsEmail from './SendInvoiceRecipientsEmail/SendInvoiceRecipientsEmail.jsx';

class SendInvoicePopup extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(SendInvoicePopupActions.reset());
    }

    onSend() {
        this.props.dispatch(SendInvoicePopupActions.send(
            this.props.SendInvoicePopupReducer.get('invoice'),
            this.props.SendInvoicePopupReducer.get('recipientsEmail')
        ));
    }

    onCancelClick() {
        this.props.dispatch(SendInvoicePopupActions.close());
    }

    render() {
        return (
            <Modal.Dialog bsSize="large">
                <Modal.Header closeButton onHide={this.onCancelClick.bind(this)}>
                    <Modal.Title>Send Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoicePreview invoice={this.props.SendInvoicePopupReducer.get('invoice')}/>
                    <SendInvoiceRecipientsEmail error={this.props.SendInvoicePopupReducer.get('error')}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onCancelClick.bind(this)}>
                        <span>Cancel</span>
                    </Button>
                    <Button bsStyle="primary" onClick={this.onSend.bind(this)}>
                        <Glyphicon glyph="send"/> Send Invoice
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}

SendInvoicePopup.displayName = 'SendInvoicePopup';

SendInvoicePopup.propTypes = {
    SendInvoicePopupReducer: ImmutablePropTypes.mapContains({
        error: PropTypes.bool,
        invoice: ImmutablePropTypes.map.isRequired,
        recipientsEmail: PropTypes.string
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(SendInvoicePopup);
