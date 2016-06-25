import { ACTIONS } from 'constants';

export function randomlyGenerateInvoices() {
    return {
        type: ACTIONS.NO_INVOICES_CTA_RANDOMLY_GENERATE_INVOICES
    };
}

export function addNewInvoice() {
    return {
        type: ACTIONS.NO_INVOICES_CTA_ADD_NEW_INVOICE
    };
}
