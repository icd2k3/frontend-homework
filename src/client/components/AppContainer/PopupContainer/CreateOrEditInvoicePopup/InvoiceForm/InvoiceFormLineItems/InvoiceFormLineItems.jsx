import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    ControlLabel,
    FormGroup
} from 'react-bootstrap';
import LineItem from './LineItem/LineItem.jsx';

export default class InvoiceFormLineItems extends React.Component {

    render() {
        return (
            <FormGroup controlId="lineItems" validationState={this.props.error ? 'error' : null}>
                <ControlLabel>Line Items</ControlLabel>
                {this.props.lineItems && this.props.lineItems.map((lineItem) => {
                    return (<LineItem key={lineItem.get('id')} lineItem={lineItem} />);
                })}
            </FormGroup>
        );
    }
}

InvoiceFormLineItems.displayName = 'InvoiceFormLineItems';

InvoiceFormLineItems.propTypes = {
    error: PropTypes.bool,
    lineItems: ImmutablePropTypes.list
};
