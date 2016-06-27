import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as SortActions from './SortActions.js';
import {
    Col,
    Glyphicon,
    Row
} from 'react-bootstrap';

import styles from './Sort.css';

class Sort extends React.Component {
    render() {
        const sortArrow = <Glyphicon className={styles.sortArrow} glyph={this.props.sortOrder === 'asc' ? 'triangle-top' : 'triangle-bottom'}/>;

        return (
            <Row className={styles.sortBar}>
                <Col
                    className={styles.sort}
                    lg={6}
                    onClick={this.props.dispatch.bind(this, SortActions.sortBy('name'))}
                    sm={5}
                    xs={6}
                >
                    Name {this.props.sortParam === 'name' ? sortArrow : null}
                </Col>
                <Col
                    className={styles.sort}
                    onClick={this.props.dispatch.bind(this, SortActions.sortBy('total'))}
                    sm={2}
                    xsHidden
                >
                    Total {this.props.sortParam === 'total' ? sortArrow : null}
                </Col>
                <Col
                    className={styles.sort}
                    onClick={this.props.dispatch.bind(this, SortActions.sortBy('dueDate'))}
                    sm={2}
                    xsHidden
                >
                    Due  {this.props.sortParam === 'dueDate' ? sortArrow : null}
                </Col>
                <Col
                    className={styles.colCenter}
                    onClick={this.props.dispatch.bind(this, SortActions.sortBy('dueDate'))}
                    sm={1}
                    xs={3}
                >
                    Status
                </Col>
            </Row>
        );
    }
}

Sort.displayName = 'Sort';

Sort.propTypes = {
    dispatch: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortParam: PropTypes.string.isRequired
};

export default connect(() => {
    return {};
})(Sort);
