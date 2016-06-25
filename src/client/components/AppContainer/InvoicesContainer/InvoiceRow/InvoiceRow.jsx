import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import moment from 'moment';
import { convertNumberToCurrency } from 'utils';
import * as InvoiceRowActions from './InvoiceRowActions.js';
import {
    Button,
    Col,
    Glyphicon,
    Label,
    Row
} from 'react-bootstrap';

import styles from './InvoiceRow.css';

class InvoiceRow extends React.Component {

    onInvoiceClick() {
        this.props.dispatch(InvoiceRowActions.edit(this.props.invoice));
    }

    render() {
        const dueDate            = new Date(this.props.invoice.get('dueDate') * 1000),
            formattedDueDate     = moment(dueDate).format('MMM Do YYYY'),
            currentUnixTimestamp = new Date().getTime() / 1000,
            dueSoonUnixTimetamp  = moment(dueDate).subtract(7, 'days').toDate().getTime() / 1000;

        let statusNode = (<Label bsStyle="primary">ACTIVE</Label>);

        if (currentUnixTimestamp > this.props.invoice.get('dueDate')) {
            statusNode = (<Label bsStyle="danger">LATE</Label>);
        } else if (currentUnixTimestamp > dueSoonUnixTimetamp) {
            statusNode = (<Label bsStyle="warning">DUE SOON</Label>);
        }

        return (
            <Row className={styles.root} onClick={this.onInvoiceClick.bind(this)}>
                <Col xs={6}>
                    <span>{this.props.invoice.get('name')}</span>
                </Col>
                <Col xs={2}>
                    ${convertNumberToCurrency(this.props.invoice.get('total')) || '0.00'}
                </Col>
                <Col xs={2}>
                    {formattedDueDate}
                </Col>
                <Col className={styles.colCenter} xs={1}>
                    {statusNode}
                </Col>
                <Col xs={1}>
                    <Button bsSize="xsmall" bsStyle="primary" className="ghost"><Glyphicon glyph="send"/> Send</Button>
                </Col>
            </Row>
        );
    }
}

InvoiceRow.displayName = 'InvoiceRow';

InvoiceRow.propTypes = {
    dispatch: PropTypes.func.isRequired,
    invoice: ImmutablePropTypes.mapContains({
        dueDate: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        lineItems: ImmutablePropTypes.list.isRequired,
        name: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(InvoiceRow);
