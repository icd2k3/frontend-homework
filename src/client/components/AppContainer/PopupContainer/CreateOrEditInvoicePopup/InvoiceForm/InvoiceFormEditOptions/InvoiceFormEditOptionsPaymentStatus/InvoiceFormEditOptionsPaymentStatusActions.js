import { ACTIONS } from 'constants';

export function change(paymentStatus) {
    return {
        paymentStatus,
        type: ACTIONS.INVOICE_FORM_EDIT_PAYMENT_STATUS_CHANGE
    };
}
