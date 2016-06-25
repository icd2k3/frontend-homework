import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import * as CreateOrEditInvoicePopupActions from './CreateOrEditInvoicePopupActions.js';
import {
    Button,
    Glyphicon,
    Modal
} from 'react-bootstrap';
import InvoiceForm from './InvoiceForm/InvoiceForm.jsx';

class CreateOrEditInvoicePopup extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(CreateOrEditInvoicePopupActions.reset());
    }

    onCreateClick() {
        this.props.dispatch(
            CreateOrEditInvoicePopupActions.create(
                this.props.CreateOrEditInvoicePopupReducer.get('invoice')
            )
        );
    }

    onSaveClick() {
        this.props.dispatch(
            CreateOrEditInvoicePopupActions.save(
                this.props.CreateOrEditInvoicePopupReducer.get('invoice')
            )
        );
    }

    onCancelClick() {
        this.props.dispatch(CreateOrEditInvoicePopupActions.close());
    }

    render() {
        const errors = this.props.CreateOrEditInvoicePopupReducer.get('errors'),
            invoice = this.props.CreateOrEditInvoicePopupReducer.get('invoice'),
            isEditMode = this.props.CreateOrEditInvoicePopupReducer.get('editMode');

        return (
            <Modal.Dialog bsSize="large">
                <Modal.Header>
                    <Modal.Title>{isEditMode ? 'Edit' : 'Create'} Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceForm isEditMode={isEditMode} errors={errors} invoice={invoice} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onCancelClick.bind(this)}>Cancel</Button>
                    <Button bsStyle="primary" onClick={isEditMode ? this.onSaveClick.bind(this) : this.onCreateClick.bind(this)}>
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
        errors: ImmutablePropTypes.map,
        invoice: ImmutablePropTypes.map.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(CreateOrEditInvoicePopup);
