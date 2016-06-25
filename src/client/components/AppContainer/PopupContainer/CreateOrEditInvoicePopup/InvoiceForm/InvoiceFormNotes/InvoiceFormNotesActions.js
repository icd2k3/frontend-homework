import { ACTIONS } from 'constants';

export function change(notes) {
    return {
        notes,
        type: ACTIONS.INVOICE_FORM_NOTES_CHANGE
    };
}
