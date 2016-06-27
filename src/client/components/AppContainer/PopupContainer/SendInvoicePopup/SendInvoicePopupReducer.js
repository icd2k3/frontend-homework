import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        error: false,
        invoice: null,
        recipientsEmail: null
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.SEND_INVOICE_RECIPIENTS_EMAIL_CHANGE:
        return state.set('recipientsEmail', action.email);

    case ACTIONS.INVOICE_ROW_SEND_INVOICE:
        return state.set('invoice', action.invoice);

    case ACTIONS.SEND_INVOICE_POPUP_SEND_ERROR:
        return state.set('error', true);

    case ACTIONS.SEND_INVOICE_POPUP_RESET:
        return state.merge({
            error: false,
            invoice: null,
            recipientsEmail: null
        });

    default:
        return state;
    }
}
