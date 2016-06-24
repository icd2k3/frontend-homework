import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Button,
    Glyphicon,
    Modal
} from 'react-bootstrap';
import InvoiceForm from './InvoiceForm/InvoiceForm.jsx';

export default class CreateOrEditInvoicePopup extends React.Component {
    render() {
        const invoice = this.props.CreateOrEditInvoicePopupReducer.get('invoice'),
            isEditMode = this.props.CreateOrEditInvoicePopupReducer.get('editMode');

        return (
            <Modal.Dialog bsSize="large">
                <Modal.Header>
                    <Modal.Title>{isEditMode ? 'Edit' : 'Create'} Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceForm invoice={invoice} />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="info">Cancel</Button>
                    <Button>
                        {isEditMode
                            ? <span><Glyphicon glyph="save-file"/> Save Invoice</span>
                            : <span><Glyphicon glyph="plus"/> Create Invoice</span>
                        }
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}

CreateOrEditInvoicePopup.displayName = 'CreateOrEditInvoicePopup';

CreateOrEditInvoicePopup.propTypes = {
    CreateOrEditInvoicePopupReducer: ImmutablePropTypes.mapContains({
        editMode: PropTypes.bool,
        invoice: ImmutablePropTypes.map.isRequired
    }).isRequired
};
