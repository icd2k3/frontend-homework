import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import moment from 'moment';
import { convertNumberToCurrency } from 'utils';
import * as InvoicePreviewActions from './InvoicePreviewActions';
import {
    Button,
    Col,
    Glyphicon,
    Grid,
    Label,
    Row
} from 'react-bootstrap';
import InvoicePreviewLineItems from './InvoicePreviewLineItems/InvoicePreviewLineItems.jsx';

import styles from './InvoicePreview.css';

class SendInvoicePreview extends React.Component {

    onEditClick() {
        this.props.dispatch(InvoicePreviewActions.edit(this.props.invoice));
    }

    render() {
        const dueDate = new Date(this.props.invoice.get('dueDate') * 1000);

        return (
            <div>
                <Grid fluid>
                    <div className={styles.preview}>
                        <Row className={styles.row}>
                            <Col xs={6}>
                                <h1 className={styles.name}>{this.props.invoice.get('name')}</h1>
                            </Col>
                            <Col className={styles.due} xs={6}>
                                <Label>Due Date: {moment(dueDate).format('MM/DD/YYYY')}</Label>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className={styles.notes} xs={12}>
                                {this.props.invoice.get('notes')}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h2 className={styles.lineItemsTitle}>Line Items</h2>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col xs={12}>
                                <InvoicePreviewLineItems lineItems={this.props.invoice.get('lineItems')} />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col xs={12}>
                                <h3 className={styles.total}>Balance: ${convertNumberToCurrency(this.props.invoice.get('total'))}</h3>
                            </Col>
                        </Row>
                    </div>
                    <Row className={styles.edit}>
                        <Col xs={12}>
                            <Button
                                bsStyle="primary"
                                className="ghost"
                                onClick={this.onEditClick.bind(this)}
                            >
                                <Glyphicon glyph="pencil"/> Edit This Invoice
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

SendInvoicePreview.displayName = 'SendInvoicePreview';

SendInvoicePreview.propTypes = {
    dispatch: PropTypes.func.isRequired,
    invoice: ImmutablePropTypes.mapContains({
        dueDate: PropTypes.number.isRequired,
        lineItems: ImmutablePropTypes.list.isRequired,
        name: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(SendInvoicePreview);
