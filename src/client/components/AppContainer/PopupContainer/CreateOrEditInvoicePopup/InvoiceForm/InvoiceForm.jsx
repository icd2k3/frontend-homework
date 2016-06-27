import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Col,
    Grid,
    Row
} from 'react-bootstrap';
import InvoiceFormName from './InvoiceFormName/InvoiceFormName.jsx';
import InvoiceFormDueDate from './InvoiceFormDueDate/InvoiceFormDueDate.jsx';
import InvoiceFormNotes from './InvoiceFormNotes/InvoiceFormNotes.jsx';
import InvoiceFormLineItems from './InvoiceFormLineItems/InvoiceFormLineItems.jsx';
import InvoiceFormLineItemsFooter from './InvoiceFormLineItemsFooter/InvoiceFormLineItemsFooter.jsx';
import InvoiceFormEditOptions from './InvoiceFormEditOptions/InvoiceFormEditOptions.jsx';

export default class InvoiceForm extends React.Component {
    render() {
        const errorName = this.props.errors && this.props.errors.get('name'),
            errorLineItems = this.props.errors && this.props.errors.get('lineItems'),
            errorDueDate = this.props.errors && this.props.errors.get('dueDate'),
            paymentStatus = this.props.invoice.get('paymentStatus') || 'unpaid';

        return (
            <Grid fluid>
                <Row>
                    <Col xs={6}>
                        <InvoiceFormName
                            error={errorName}
                            name={this.props.invoice.get('name')}
                        />
                    </Col>
                    <Col xs={6}>
                        <InvoiceFormDueDate
                            dueDate={this.props.invoice.get('dueDate')}
                            error={errorDueDate}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <InvoiceFormNotes notes={this.props.invoice.get('notes')}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <InvoiceFormLineItems
                            error={errorLineItems}
                            lineItems={this.props.invoice.get('lineItems')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <InvoiceFormLineItemsFooter
                            error={errorLineItems}
                            total={this.props.invoice.get('total')}
                        />
                    </Col>
                </Row>
                {this.props.isEditMode
                    ? <InvoiceFormEditOptions
                        id={this.props.invoice.get('id')}
                        paymentStatus={paymentStatus}
                      />
                    : null
                }
            </Grid>
        );
    }
}

InvoiceForm.displayName = 'InvoiceForm';

InvoiceForm.propTypes = {
    errors: ImmutablePropTypes.map,
    invoice: ImmutablePropTypes.mapContains({
        dueDate: ImmutablePropTypes.number,
        id: PropTypes.string,
        lineItems: ImmutablePropTypes.list,
        name: PropTypes.string,
        notes: PropTypes.string,
        paymentStatus: PropTypes.string,
        total: PropTypes.number
    }).isRequired,
    isEditMode: PropTypes.bool
};
