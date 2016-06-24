import React from 'react';
import {
    Grid
} from 'react-bootstrap';

import styles from './InvoicesContainer.css';

export default class InvoicesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className={styles.root} fluid>
                Invoices go here
            </Grid>
        );
    }
}

InvoicesContainer.displayName = 'InvoicesContainer';
