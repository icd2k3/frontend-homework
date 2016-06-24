import immutable from 'immutable';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        activePopups: {
            createOrEditInvoicePopup: false
        }
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.TITLE_ADD_NEW_INVOICE:
        return state.setIn(['activePopups', 'createOrEditInvoicePopup'], true);

    default:
        return state;
    }
}
