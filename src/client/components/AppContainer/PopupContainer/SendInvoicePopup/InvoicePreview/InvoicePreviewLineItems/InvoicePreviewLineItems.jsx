import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Grid
} from 'react-bootstrap';
import InvoicePreviewLineItem from './InvoicePreviewLineItem/InvoicePreviewLineItem.jsx';

export default class InvoicePreviewLineItems extends React.Component {
    render() {
        return (
            <Grid fluid>
                {this.props.lineItems.map((lineItem) => {
                    return <InvoicePreviewLineItem lineItem={lineItem} />;
                })}
            </Grid>
        );
    }
}

InvoicePreviewLineItems.displayName = 'InvoicePreviewLineItems';

InvoicePreviewLineItems.propTypes = {
    lineItems: ImmutablePropTypes.list.isRequired
};
