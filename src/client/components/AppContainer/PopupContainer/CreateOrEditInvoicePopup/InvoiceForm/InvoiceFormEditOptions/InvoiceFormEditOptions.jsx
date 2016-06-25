import React, { PropTypes } from 'react';
import {
    Col,
    Row
} from 'react-bootstrap';
import InvoiceFormEditOptionsDelete from './InvoiceFormEditOptionsDelete/InvoiceFormEditOptionsDelete.jsx';
import InvoiceFormEditOptionsPaymentStatus from './InvoiceFormEditOptionsPaymentStatus/InvoiceFormEditOptionsPaymentStatus.jsx';

export default class InvoiceFormEditOptions extends React.Component {

    render() {
        return (
            <Row>
                <Col xs={6}>
                    <InvoiceFormEditOptionsDelete id={this.props.id}/>
                </Col>
                <Col xs={6}>
                    <InvoiceFormEditOptionsPaymentStatus paymentStatus={this.props.paymentStatus}/>
                </Col>
            </Row>
        );
    }
}

InvoiceFormEditOptions.displayName = 'InvoiceFormEditOptions';

InvoiceFormEditOptions.propTypes = {
    id: PropTypes.string,
    paymentStatus: PropTypes.string
};
