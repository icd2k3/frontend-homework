import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
    Grid
} from 'react-bootstrap';
import NoInvoicesCTA from './NoInvoicesCTA/NoInvoicesCTA.jsx';
import InvoiceRow from './InvoiceRow/InvoiceRow.jsx';

import styles from './InvoicesContainer.css';

export default class InvoicesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const invoices = this.props.InvoicesContainerReducer.get('invoices');

        return (
            <Grid className={styles.root} fluid>
                {invoices && invoices.map((invoice) => {
                    return <InvoiceRow invoice={invoice} key={invoice.get('id')} />;
                })}
                {invoices && invoices.size
                    ? null
                    : <NoInvoicesCTA/>
                }
            </Grid>
        );
    }
}

InvoicesContainer.displayName = 'InvoicesContainer';

InvoicesContainer.propTypes = {
    InvoicesContainerReducer: ImmutablePropTypes.mapContains({
        invoices: ImmutablePropTypes.list
    }).isRequired
};
