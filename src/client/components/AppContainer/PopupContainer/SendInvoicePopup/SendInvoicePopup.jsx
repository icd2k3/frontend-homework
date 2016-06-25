import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import * as SendInvoicePopupActions from './SendInvoicePopupActions.js';
import {
    Button,
    Glyphicon,
    Modal
} from 'react-bootstrap';
import SendInvoicePreview from './SendInvoicePreview/SendInvoicePreview.jsx';

import styles from './SendInvoicePopup.css';

class SendInvoicePopup extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(SendInvoicePopupActions.reset());
    }

    onSend() {

    }

    onCancelClick() {
        this.props.dispatch(SendInvoicePopupActions.close());
    }

    render() {
        return (
            <Modal.Dialog bsSize="large">
                <Modal.Header>
                    <Modal.Title>Send Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.body}>
                    <SendInvoicePreview invoice={this.props.SendInvoicePopupReducer.get('invoice')}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onCancelClick.bind(this)}>Cancel</Button>
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
        invoice: ImmutablePropTypes.map.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(SendInvoicePopup);
