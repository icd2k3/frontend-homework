import React, { PropTypes } from 'react';
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
                <Sort
                    sortOrder={this.props.sortOrder}
                    sortParam={this.props.sortParam}
                />
            </Grid>
        );
    }
}

HeaderContainer.displayName = 'HeaderContainer';

HeaderContainer.propTypes = {
    sortOrder: PropTypes.string.isRequired,
    sortParam: PropTypes.string.isRequired
};
