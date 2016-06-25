import { ACTIONS } from 'constants';

export function del(id) {
    return {
        id,
        type: ACTIONS.INVOICE_FORM_EDIT_OPTIONS_DELETE
    };
}
