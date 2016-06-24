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
                <Col className={styles.sort} xs={6}>
                    Name
                </Col>
                <Col className={styles.sort} xs={2}>
                    Created
                </Col>
                <Col className={styles.sort} xs={2}>
                    Total
                </Col>
                <Col className={styles.sort} xs={1}>
                    Status
                </Col>
                <Col className={styles.sort} xs={1}>
                    Send
                </Col>
            </Row>
        );
    }
}

Sort.displayName = 'Sort';
