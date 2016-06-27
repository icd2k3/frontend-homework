import { ACTIONS } from 'constants';

export function change(email) {
    return {
        email,
        type: ACTIONS.SEND_INVOICE_RECIPIENTS_EMAIL_CHANGE
    };
}
