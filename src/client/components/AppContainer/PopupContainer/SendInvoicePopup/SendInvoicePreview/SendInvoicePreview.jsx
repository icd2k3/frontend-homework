import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Button,
    Col,
    ControlLabel,
    Glyphicon,
    Grid,
    Label,
    Row
} from 'react-bootstrap';

import styles from './SendInvoicePreview.css';

class SendInvoicePreview extends React.Component {
    render() {
        const dueDate = new Date(this.props.invoice.get('dueDate') * 1000);

        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <ControlLabel>Preview</ControlLabel>
                        </Col>
                    </Row>
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
                    </div>
                    <Row className={styles.edit}>
                        <Col xs={12}>
                            <Button className="ghost" bsStyle="primary"><Glyphicon glyph="pencil"/> Edit This Invoice</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ControlLabel>Recipient's Email Address</ControlLabel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

SendInvoicePreview.displayName = 'SendInvoicePreview';

SendInvoicePreview.propTypes = {
    invoice: ImmutablePropTypes.mapContains({
        name: PropTypes.string.isRequired,
        dueDate: PropTypes.number.isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(SendInvoicePreview);
