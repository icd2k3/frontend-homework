import React from 'react';
import {
    Grid
} from 'react-bootstrap';
import Title from './Title/Title.jsx';
import Sort from './Sort/Sort.jsx';

import styles from './HeaderContainer.css';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className={styles.root} fluid>
                <Title/>
                <Sort/>
            </Grid>
        );
    }
}

HeaderContainer.displayName = 'HeaderContainer';
