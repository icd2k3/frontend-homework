import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { convertNumberToCurrency } from 'utils';
import {
    Col,
    Row
} from 'react-bootstrap';

import styles from './InvoicePreviewLineItem.css';

class InvoicePreviewLineItem extends React.Component {
    render() {
        return (
            <Row className={styles.root}>
                <Col className={styles.type} xs={2}>
                    <strong>{this.props.lineItem.get('type')}</strong>
                </Col>
                <Col xs={5}>
                    {this.props.lineItem.get('type') === 'labor'
                        ? <span>
                            {this.props.lineItem.get('hours')} hours at ${convertNumberToCurrency(Number(this.props.lineItem.get('rate')))} per hour
                          </span>
                        : <span>
                            {this.props.lineItem.get('note')}
                          </span>
                    }
                </Col>
                <Col className={styles.total} xs={2}>
                    ${convertNumberToCurrency(this.props.lineItem.get('total'))}
                </Col>
            </Row>
        );
    }
}

InvoicePreviewLineItem.displayName = 'InvoicePreviewLineItem';

InvoicePreviewLineItem.propTypes = {
    lineItem: ImmutablePropTypes.mapContains({
        hours: PropTypes.number,
        note: PropTypes.string,
        rate: PropTypes.number,
        total: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(InvoicePreviewLineItem);
