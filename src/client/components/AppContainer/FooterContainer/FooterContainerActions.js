import { ACTIONS } from 'constants';

export function randomlyGenerateInvoices() {
    return {
        type: ACTIONS.FOOTER_CONTAINER_RANDOMLY_GENERATE_INVOICES
    };
}

export function addNewInvoice() {
    return {
        type: ACTIONS.FOOTER_CONTAINER_ADD_NEW_INVOICE
    };
}
