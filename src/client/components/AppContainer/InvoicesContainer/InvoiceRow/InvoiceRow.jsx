import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Col,
    Row
} from 'react-bootstrap';

import styles from './InvoiceRow.css';

export default class InvoiceRow extends React.Component {
    render() {
        return (
            <Row className={styles.root}>
                <Col>
                    {this.props.invoice.get('name')}
                </Col>
            </Row>
        );
    }
}

InvoiceRow.displayName = 'InvoiceRow';

InvoiceRow.propTypes = {
    invoice: ImmutablePropTypes.mapContains({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lineItems: ImmutablePropTypes.list.isRequired,
        dueDate: PropTypes.number.isRequired
    }).isRequired
};
