import immutable from 'immutable';
import { ACTIONS } from 'constants';
import { generateId } from 'utils';

export default function(
    state = immutable.fromJS({
        invoices: null
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).push(action.invoice.set('id', generateId())));

    default:
        return state;
    }
}
