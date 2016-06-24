import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Button,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Glyphicon,
    Grid,
    Row
} from 'react-bootstrap';
import { DateTimePicker } from 'react-widgets';
import * as InvoiceFormActions from './InvoiceFormActions.js';
import LineItem from './LineItem/LineItem.jsx';

import styles from './InvoiceForm.css';

export default class InvoiceForm extends React.Component {

    onChangeName(event) {
        this.props.dispatch(InvoiceFormActions.changeName(event.target.value));
    }

    onAddNewLineItemClick() {
        this.props.dispatch(InvoiceFormActions.addLineItem());
    }

    onChangeNotes(event) {
        this.props.dispatch(InvoiceFormActions.changeNotes(event.target.value));
    }

    onChangeDueDate(date) {
        this.props.dispatch(InvoiceFormActions.changeDueDate(date));
    }

    render() {
        const errorName = this.props.errors && this.props.errors.get('name'),
            errorLineItems = this.props.errors && this.props.errors.get('lineItems'),
            errorDueDate = this.props.errors && this.props.errors.get('dueDate');

        return (
            <Grid fluid>
                <Row>
                    <Col xs={6}>
                        <FormGroup controlId='name' validationState={errorName ? 'error' : null}>
                            <ControlLabel>Invoice Name</ControlLabel>
                            <FormControl
                                onChange={this.onChangeName.bind(this)}
                                placeholder="Name your new invoice"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup controlId="lineItems" validationState={errorDueDate ? 'error' : null}>
                            <ControlLabel>Due Date</ControlLabel>
                            <DateTimePicker onChange={this.onChangeDueDate.bind(this)}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormGroup controlId='notes'>
                            <ControlLabel>Notes</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                onChange={this.onChangeNotes.bind(this)}
                                placeholder="Add some notes to this invoice. Such as payment options, etc."
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormGroup controlId="lineItems" validationState={errorLineItems ? 'error' : null}>
                            <ControlLabel>Line Items</ControlLabel>
                            {this.props.invoice.get('lineItems') && this.props.invoice.get('lineItems').map((lineItem) => {
                                return (<LineItem key={lineItem.get('id')} lineItem={lineItem} />);
                            })}
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.lineItemsFooter}>
                    <Col xs={6}>
                        <Button
                            bsSize="small"
                            bsStyle={errorLineItems ? 'danger' : 'primary'}
                            className="ghost"
                            onClick={this.onAddNewLineItemClick.bind(this)}
                        >
                            <Glyphicon glyph="plus"/> Add New Line Item
                        </Button>
                    </Col>
                    <Col className={styles.total} xs={6}>
                        Grand Total: ${this.props.invoice.get('total') || 0.00}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

InvoiceForm.displayName = 'InvoiceForm';

InvoiceForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    errors: ImmutablePropTypes.map,
    invoice: ImmutablePropTypes.mapContains({
        dueDate: ImmutablePropTypes.number,
        lineItems: ImmutablePropTypes.list,
        name: PropTypes.string,
        notes: PropTypes.string,
        total: PropTypes.string
    }).isRequired
};

export default connect(() => {
    return {};
})(InvoiceForm);
