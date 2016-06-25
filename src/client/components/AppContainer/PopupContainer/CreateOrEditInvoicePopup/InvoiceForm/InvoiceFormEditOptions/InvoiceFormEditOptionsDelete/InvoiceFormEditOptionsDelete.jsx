import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as InvoiceFormEditOptionsDeleteActions from './InvoiceFormEditOptionsDeleteActions.js';
import {
    Button,
    ControlLabel,
    FormGroup,
    Glyphicon
} from 'react-bootstrap';

class InvoiceFormEditOptionsDelete extends React.Component {
    render() {
        return (
            <FormGroup controlId="delete">
                <ControlLabel>Delete Invoice</ControlLabel>
                <div>
                    <Button
                        bsStyle="danger"
                        className="ghost"
                        onClick={this.props.dispatch.bind(this, InvoiceFormEditOptionsDeleteActions.del(this.props.id))}
                    >
                        <Glyphicon glyph="trash"/> Delete This Invoice
                    </Button>
                </div>
            </FormGroup>
        );
    }
}

InvoiceFormEditOptionsDelete.displayName = 'InvoiceFormEditOptionsDelete';

InvoiceFormEditOptionsDelete.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string
};

export default connect(() => {
    return {};
})(InvoiceFormEditOptionsDelete);
