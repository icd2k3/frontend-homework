import { ACTIONS } from 'constants';

export function change(name) {
    return {
        name,
        type: ACTIONS.INVOICE_FORM_NAME_CHANGE
    };
}
