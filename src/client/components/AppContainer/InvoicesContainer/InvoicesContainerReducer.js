import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        invoices: null
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).push(action.invoice));

    default:
        return state;
    }
}
