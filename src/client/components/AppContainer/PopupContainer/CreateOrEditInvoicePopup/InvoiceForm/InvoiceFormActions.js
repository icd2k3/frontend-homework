import { ACTIONS } from 'constants';

export function addLineItem() {
    return {
        type: ACTIONS.INVOICE_FORM_ADD_LINE_ITEM
    };
}

export function changeName(name) {
    return {
        name,
        type: ACTIONS.INVOICE_FORM_CHANGE_NAME
    };
}

export function changeNotes(notes) {
    return {
        notes,
        type: ACTIONS.INVOICE_FORM_CHANGE_NOTES
    };
}

export function changeDueDate(date) {
    return {
        unixTimestamp: date.getTime() / 1000,
        type: ACTIONS.INVOICE_FORM_CHANGE_DUE_DATE
    };
}

export function changePaymentStatus(paymentStatus) {
    return {
        paymentStatus,
        type: ACTIONS.INVOICE_FORM_CHANGE_PAYMENT_STATUS
    };
}
