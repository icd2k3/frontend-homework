import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        activePopups: {
            createOrEditInvoicePopup: false,
            sendInvoicePopup: false
        }
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.TITLE_ADD_NEW_INVOICE:
    case ACTIONS.FOOTER_CONTAINER_ADD_NEW_INVOICE:
    case ACTIONS.NO_INVOICES_CTA_ADD_NEW_INVOICE:
    case ACTIONS.INVOICE_ROW_EDIT_INVOICE:
        return state.setIn(['activePopups', 'createOrEditInvoicePopup'], true);

    case ACTIONS.INVOICE_PREVIEW_EDIT_INVOICE:
        return state.mergeIn(['activePopups'], {
            createOrEditInvoicePopup: true,
            sendInvoicePopup: false
        });

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CLOSE:
    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_SAVE:
    case ACTIONS.INVOICE_FORM_EDIT_OPTIONS_DELETE:
        return state.setIn(['activePopups', 'createOrEditInvoicePopup'], false);

    case ACTIONS.INVOICE_ROW_SEND_INVOICE:
        return state.setIn(['activePopups', 'sendInvoicePopup'], true);

    case ACTIONS.SEND_INVOICE_POPUP_CLOSE:
    case ACTIONS.SEND_INVOICE_POPUP_SEND:
        return state.setIn(['activePopups', 'sendInvoicePopup'], false);

    default:
        return state;
    }
}
