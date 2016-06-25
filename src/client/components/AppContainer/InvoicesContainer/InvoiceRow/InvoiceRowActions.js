import { ACTIONS } from 'constants';

export function edit(invoice) {
    return {
        invoice,
        type: ACTIONS.INVOICE_ROW_EDIT_INVOICE
    };
}

export function send(invoice) {
    return {
        invoice,
        type: ACTIONS.INVOICE_ROW_SEND_INVOICE
    };
}
