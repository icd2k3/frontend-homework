import React from 'react';
import {
    Col,
    Row
} from 'react-bootstrap';

import styles from './Sort.css';

export default class Sort extends React.Component {
    render() {
        return (
            <Row className={styles.sortBar}>
                <Col xs={6}>
                    Name
                </Col>
                <Col xs={2}>
                    Total
                </Col>
                <Col xs={2}>
                    Due
                </Col>
                <Col className={styles.colCenter} xs={1}>
                    Status
                </Col>
                <Col className={styles.colCenter} xs={1}>
                    Send
                </Col>
            </Row>
        );
    }
}

Sort.displayName = 'Sort';
