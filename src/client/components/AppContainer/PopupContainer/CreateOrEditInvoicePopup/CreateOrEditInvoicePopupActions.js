import { ACTIONS } from 'constants';

function getInvoiceValidationErrors(invoice) {
    const errors = {};

    if (!invoice.get('name')) {
        errors.name = true;
    }
    if (!invoice.get('dueDate')) {
        errors.dueDate = true;
    }
    if (!invoice.get('lineItems') || !invoice.get('lineItems').size) {
        errors.lineItems = true;
    }

    return Object.keys(errors).length ? errors : null;
}

export function create(invoice) {
    const errors = getInvoiceValidationErrors(invoice);

    return {
        errors,
        invoice,
        type: errors ? ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_ERROR : ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE
    };
}

export function save(invoice) {
    const errors = getInvoiceValidationErrors(invoice);

    return {
        errors,
        invoice,
        type: errors ? ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_ERROR : ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_SAVE
    };
}

export function close() {
    return {
        type: ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CLOSE
    };
}

export function reset() {
    return {
        type: ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_RESET
    };
}
