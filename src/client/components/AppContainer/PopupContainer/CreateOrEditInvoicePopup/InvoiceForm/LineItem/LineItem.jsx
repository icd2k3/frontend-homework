import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { convertNumberToCurrency } from 'utils';
import {
    Col,
    DropdownButton,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    MenuItem,
    Row
} from 'react-bootstrap';
import * as LineItemActions from './LineItemActions.js';

import styles from './LineItem.css';

export default class LineItem extends React.Component {

    onTypeChange(type) {
        this.props.dispatch(LineItemActions.changeType(this.props.lineItem.get('id'), type));
    }

    onHoursChange(event) {
        this.props.dispatch(LineItemActions.changeHours(this.props.lineItem.get('id'), event.target.value));
    }

    onRateChange(event) {
        this.props.dispatch(LineItemActions.changeRate(this.props.lineItem.get('id'), event.target.value));
    }

    onNoteChange(event) {
        this.props.dispatch(LineItemActions.changeNote(this.props.lineItem.get('id'), event.target.value));
    }

    onExpenseChange(event) {
        this.props.dispatch(LineItemActions.changeExpense(this.props.lineItem.get('id'), event.target.value));
    }

    render() {
        const type = this.props.lineItem.get('type');

        return (
            <Row className={styles.root}>
                <Col xs={12}>
                    <Form inline>
                        <FormGroup className={styles.formGroup}>
                            <InputGroup className={styles.inputGroup}>
                                <DropdownButton
                                    className={styles.dropdownButton}
                                    componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    onSelect={this.onTypeChange.bind(this)}
                                    title={`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
                                >
                                    <MenuItem eventKey="labor">Labor</MenuItem>
                                    <MenuItem eventKey="materials">Materials</MenuItem>
                                    <MenuItem eventKey="expenses">Expenses</MenuItem>
                                    <MenuItem eventKey="other">Other</MenuItem>
                                </DropdownButton>
                                {this.props.lineItem.get('type') === 'labor'
                                    ? <FormControl
                                        className={styles.formControl}
                                        onChange={this.onHoursChange.bind(this)}
                                        placeholder="Enter hours worked"
                                        type="number"
                                        value={this.props.lineItem.get('hours') || ''}
                                      />
                                    : <FormControl
                                        className={styles.formControl}
                                        onChange={this.onNoteChange.bind(this)}
                                        placeholder="Enter a description here"
                                        type="text"
                                        value={this.props.lineItem.get('note') || ''}
                                      />
                                }
                            </InputGroup>
                            <InputGroup className={styles.inputGroup}>
                                {this.props.lineItem.get('type') === 'labor'
                                    ? <FormControl
                                        className={styles.formControl}
                                        onChange={this.onRateChange.bind(this)}
                                        placeholder="Enter your hourly rate"
                                        type="number"
                                        value={this.props.lineItem.get('rate') || ''}
                                      />
                                    : <FormControl
                                        className={styles.formControl}
                                        onChange={this.onExpenseChange.bind(this)}
                                        placeholder="Enter cost"
                                        type="number"
                                        value={this.props.lineItem.get('total') || ''}
                                      />
                                }
                                <InputGroup.Addon className={styles.rowTotal}>Total: ${convertNumberToCurrency(Number(this.props.lineItem.get('total')))}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

LineItem.displayName = 'LineItem';

LineItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    lineItem: ImmutablePropTypes.mapContains({
        hours: PropTypes.string,
        id: PropTypes.string.isRequired,
        rate: PropTypes.string,
        total: PropTypes.string,
        type: PropTypes.oneOf(['labor', 'materials', 'expenses', 'other']).isRequired
    }).isRequired
};

export default connect(() => {
    return {};
})(LineItem);
