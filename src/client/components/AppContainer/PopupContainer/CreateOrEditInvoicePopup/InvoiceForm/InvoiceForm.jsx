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

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <FormGroup controlId='name'>
                            <ControlLabel>Invoice Name</ControlLabel>
                            <FormControl
                                onChange={this.onChangeName.bind(this)}
                                placeholder="Name your new invoice"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ControlLabel>Line Items</ControlLabel>
                        {this.props.invoice.get('lineItems') && this.props.invoice.get('lineItems').map((lineItem) => {
                            return (<LineItem key={lineItem.get('id')} lineItem={lineItem} />);
                        })}
                    </Col>
                </Row>
                <Row className={styles.lineItemsFooter}>
                    <Col xs={6}>
                        <Button bsSize="small" bsStyle="primary" className="ghost" onClick={this.onAddNewLineItemClick.bind(this)}>
                            <Glyphicon glyph="plus"/> Add New Line Item
                        </Button>
                    </Col>
                    <Col className={styles.total} xs={6}>
                        Grand Total: ${this.props.invoice.get('total') || 0.00}
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
            </Grid>
        );
    }
}

InvoiceForm.displayName = 'InvoiceForm';

InvoiceForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    invoice: ImmutablePropTypes.mapContains({
        lineItems: ImmutablePropTypes.list,
        total: PropTypes.string
    }).isRequired
};

export default connect(() => {
    return {};
})(InvoiceForm);
