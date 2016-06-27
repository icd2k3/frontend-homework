import { ACTIONS } from 'constants';

export function edit(invoice) {
    return {
        invoice,
        type: ACTIONS.INVOICE_PREVIEW_EDIT_INVOICE
    };
}
