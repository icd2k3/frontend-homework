import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        invoice: null
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.INVOICE_ROW_SEND_INVOICE:
        return state.set('invoice', action.invoice);

    case ACTIONS.SEND_INVOICE_POPUP_RESET:
        return state.set('invoice', null);

    default:
        return state;
    }
}
