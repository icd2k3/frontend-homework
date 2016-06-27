import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as SendInvoiceRecipientsEmailActions from './SendInvoiceRecipientsEmailActions.js';
import {
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Grid,
    Row
} from 'react-bootstrap';

class SendInvoiceRecipientsEmail extends React.Component {

    onChange(event) {
        this.props.dispatch(SendInvoiceRecipientsEmailActions.change(event.target.value));
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col>
                        <FormGroup controlId='name' validationState={this.props.error ? 'error' : null}>
                            <ControlLabel>Recipient's Email Address</ControlLabel>
                            <FormControl
                                onChange={this.onChange.bind(this)}
                                placeholder="Enter Recipient's Email Address"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

SendInvoiceRecipientsEmail.displayName = 'SendInvoiceRecipientsEmail';

SendInvoiceRecipientsEmail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.bool
};

export default connect(() => {
    return {};
})(SendInvoiceRecipientsEmail);
