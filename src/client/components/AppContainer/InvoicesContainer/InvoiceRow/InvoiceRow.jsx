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

    onSendClick(event) {
        event.stopPropagation();
        this.props.dispatch(InvoiceRowActions.send(this.props.invoice));
    }

    render() {
        const dueDate            = new Date(this.props.invoice.get('dueDate') * 1000),
            formattedDueDate     = moment(dueDate).format('MMM Do YYYY'),
            currentUnixTimestamp = new Date().getTime() / 1000,
            dueSoonUnixTimetamp  = moment(dueDate).subtract(7, 'days').toDate().getTime() / 1000,
            paymentStatus        = this.props.invoice.get('paymentStatus');

        let statusNode = <Label bsStyle="primary">ACTIVE</Label>;

        if (paymentStatus && paymentStatus === 'paid') {
            statusNode = <Label bsStyle="success">PAID</Label>;
        } else if (currentUnixTimestamp > this.props.invoice.get('dueDate')) {
            statusNode = <Label bsStyle="danger">LATE</Label>;
        } else if (currentUnixTimestamp > dueSoonUnixTimetamp) {
            statusNode = <Label bsStyle="warning">DUE SOON</Label>;
        }

        return (
            <Row className={styles.root} onClick={this.onInvoiceClick.bind(this)}>
                <Col
                    className={styles.name}
                    lg={6}
                    sm={5}
                    xs={6}
                >
                    <Glyphicon className={styles.editIcon} glyph="cog"/>
                    <span>{this.props.invoice.get('name')}</span>
                </Col>
                <Col
                    sm={2}
                    xsHidden
                >
                    ${convertNumberToCurrency(this.props.invoice.get('total')) || '0.00'}
                </Col>
                <Col
                    sm={2}
                    xsHidden
                >
                    {formattedDueDate}
                </Col>
                <Col
                    className={styles.colCenter}
                    sm={1}
                    xs={3}
                >
                    {statusNode}
                </Col>
                <Col
                    className={styles.colRight}
                    lg={1}
                    sm={2}
                    xs={3}
                >
                    <Button
                        bsSize="xsmall"
                        bsStyle={this.props.invoice.get('sent') ? 'success' : 'primary'}
                        className="ghost"
                        onClick={this.onSendClick.bind(this)}
                    >
                    {this.props.invoice.get('sent')
                        ? <span><Glyphicon glyph="ok"/> Sent!</span>
                        : <span><Glyphicon glyph="send"/> Send</span>
                    }
                    </Button>
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
        sent: PropTypes.bool,
        total: PropTypes.number.isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(InvoiceRow);
