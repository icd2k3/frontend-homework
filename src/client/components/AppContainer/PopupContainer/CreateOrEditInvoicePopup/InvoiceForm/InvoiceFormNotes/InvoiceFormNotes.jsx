import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    ControlLabel,
    FormControl,
    FormGroup
} from 'react-bootstrap';
import * as InvoiceFormNotesActions from './InvoiceFormNotesActions.js';

class InvoiceFormNotes extends React.Component {

    onChange(event) {
        this.props.dispatch(InvoiceFormNotesActions.change(event.target.value));
    }

    render() {
        return (
            <FormGroup controlId='notes'>
                <ControlLabel>Notes</ControlLabel>
                <FormControl
                    componentClass="textarea"
                    defaultValue={this.props.notes}
                    onChange={this.onChange.bind(this)}
                    placeholder="Add some notes to this invoice. Such as payment options, etc."
                />
            </FormGroup>
        );
    }
}

InvoiceFormNotes.displayName = 'InvoiceFormNotes';

InvoiceFormNotes.propTypes = {
    dispatch: PropTypes.func.isRequired,
    notes: PropTypes.string
};

export default connect(() => {
    return {};
})(InvoiceFormNotes);
