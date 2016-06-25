import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        activePopups: {
            createOrEditInvoicePopup: false
        }
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.TITLE_ADD_NEW_INVOICE:
    case ACTIONS.FOOTER_CONTAINER_ADD_NEW_INVOICE:
    case ACTIONS.NO_INVOICES_CTA_ADD_NEW_INVOICE:
        return state.setIn(['activePopups', 'createOrEditInvoicePopup'], true);

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CLOSE:
    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return state.setIn(['activePopups', 'createOrEditInvoicePopup'], false);

    default:
        return state;
    }
}
