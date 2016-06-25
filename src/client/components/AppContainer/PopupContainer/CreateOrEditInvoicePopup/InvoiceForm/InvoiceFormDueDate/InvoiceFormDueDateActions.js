import { ACTIONS } from 'constants';

export function change(date) {
    return {
        unixTimestamp: date.getTime() / 1000,
        type: ACTIONS.INVOICE_FORM_DUE_DATE_CHANGE
    };
}
