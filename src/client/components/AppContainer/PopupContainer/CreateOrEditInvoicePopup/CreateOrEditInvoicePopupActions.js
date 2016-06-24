import { ACTIONS } from 'constants';

export function create(invoice) {
    return {
        invoice,
        type: ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE
    };
}
