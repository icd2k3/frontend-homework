import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Col,
    Glyphicon,
    Row
} from 'react-bootstrap';
import * as TitleActions from './TitleActions.js';

import styles from './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddNewClick() {
        this.props.dispatch(TitleActions.addNewInvoice());
    }

    render() {
        return (
            <Row>
                <Col className={styles.titleBar} xs={12}>
                    <h1 className={styles.title}>
                        Invoiceinator 3000
                    </h1>
                    <Button bsStyle="primary" className={styles.button} onClick={this.onAddNewClick.bind(this)}>
                        <Glyphicon glyph="plus"/> Add New Invoice
                    </Button>
                </Col>
            </Row>
        );
    }
}

Title.displayName = 'Title';

Title.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(() => {
    return {};
})(Title);
