import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    ControlLabel,
    FormGroup
} from 'react-bootstrap';
import {
    DateTimePicker
} from 'react-widgets';
import * as InvoiceFormDueDateActions from './InvoiceFormDueDateActions.js';

class InvoiceFormDueDate extends React.Component {

    onChange(date) {
        console.log(date);
        this.props.dispatch(InvoiceFormDueDateActions.change(date));
    }

    render() {
        return (
            <FormGroup controlId="dueDate" validationState={this.props.error ? 'error' : null}>
                <ControlLabel>Due Date</ControlLabel>
                <DateTimePicker
                    onChange={this.onChange.bind(this)}
                    time={false}
                    value={this.props.dueDate ? new Date(this.props.dueDate * 1000) : null}
                />
            </FormGroup>
        );
    }
}

InvoiceFormDueDate.displayName = 'InvoiceFormDueDate';

InvoiceFormDueDate.propTypes = {
    dispatch: PropTypes.func.isRequired,
    dueDate: PropTypes.number,
    error: PropTypes.bool
};

export default connect(() => {
    return {};
})(InvoiceFormDueDate);
