import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    ControlLabel,
    FormControl,
    FormGroup
} from 'react-bootstrap';
import * as InvoiceFormNameActions from './InvoiceFormNameActions.js';

class InvoiceFormName extends React.Component {

    onChange(event) {
        this.props.dispatch(InvoiceFormNameActions.change(event.target.value));
    }

    render() {
        return (
            <FormGroup controlId='name' validationState={this.props.error ? 'error' : null}>
                <ControlLabel>Invoice Name</ControlLabel>
                <FormControl
                    defaultValue={this.props.name}
                    onChange={this.onChange.bind(this)}
                    placeholder="Name your new invoice"
                    type="text"
                />
            </FormGroup>
        );
    }
}

InvoiceFormName.displayName = 'InvoiceFormName';

InvoiceFormName.propTypes = {
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.bool,
    name: PropTypes.string
};

export default connect(() => {
    return {};
})(InvoiceFormName);
