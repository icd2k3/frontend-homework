import immutable from 'immutable';
import { generateId } from 'utils';
import { ACTIONS } from 'constants';

export default function(
    state = immutable.fromJS({
        editMode: false,
        errors: {},
        invoice: {}
    }), action = {}) {
    let newState;

    function findLineItemLocation(id) {
        const lineItems = state.get('invoice').get('lineItems');

        return lineItems
            ? ['invoice', 'lineItems', lineItems.findIndex((lineItem) => lineItem.get('id') === id)]
            : null;
    }

    function getTotal(currentState) {
        let total = 0;

        currentState
            .getIn(['invoice', 'lineItems'])
            .forEach((lineItem) => {
                total += Number(lineItem.get('total') || 0);
            });

        return total;
    }

    switch (action.type) {

    case ACTIONS.INVOICE_ROW_EDIT_INVOICE:
        return state
            .merge({
                invoice: action.invoice,
                editMode: true
            });

    case ACTIONS.INVOICE_FORM_CHANGE_NAME:
        return state
            .setIn(['invoice', 'name'], action.name)
            .deleteIn(['errors', 'name']);

    case ACTIONS.INVOICE_FORM_CHANGE_NOTES:
        return state
            .setIn(['invoice', 'notes'], action.notes);

    case ACTIONS.INVOICE_FORM_CHANGE_DUE_DATE:
        return state
            .setIn(['invoice', 'dueDate'], action.unixTimestamp)
            .deleteIn(['errors', 'dueDate']);

    case ACTIONS.INVOICE_FORM_ADD_LINE_ITEM:
        const currentLineItems = immutable.fromJS(state.get('invoice').get('lineItems') || []);

        return state
            .setIn(['invoice', 'lineItems'], currentLineItems.push(immutable.fromJS({
                id: generateId(),
                type: 'labor'
            })))
            .deleteIn(['errors', 'lineItems']);

    case ACTIONS.LINE_ITEM_CHANGE_TYPE:
        newState = state
            .mergeIn(findLineItemLocation(action.id), {
                hours: null,
                note: null,
                rate: null,
                total: null,
                type: action.lineItemType
            });

        return newState
            .setIn(['invoice', 'total'], getTotal(newState));

    case ACTIONS.LINE_ITEM_CHANGE_NOTE:
        return state
            .setIn(findLineItemLocation(action.id).concat(['note']), action.note);

    case ACTIONS.LINE_ITEM_CHANGE_EXPENSE:
        newState = state
            .setIn(findLineItemLocation(action.id).concat(['total']), action.expense);

        return newState
            .setIn(['invoice', 'total'], getTotal(newState));

    case ACTIONS.LINE_ITEM_CHANGE_HOURS:
        newState = state
            .mergeIn(findLineItemLocation(action.id), {
                hours: action.hours,
                total: Number(action.hours) * (state.getIn(findLineItemLocation(action.id).concat(['rate'])) || '0')
            });

        return newState
            .setIn(['invoice', 'total'], getTotal(newState));

    case ACTIONS.LINE_ITEM_CHANGE_RATE:
        newState = state
            .mergeIn(findLineItemLocation(action.id), {
                rate: action.rate,
                total: Number(action.rate) * (state.getIn(findLineItemLocation(action.id).concat(['hours'])) || '0')
            });

        return newState
            .setIn(['invoice', 'total'], getTotal(newState));

    case ACTIONS.LINE_ITEM_REMOVE:
        newState = state
            .deleteIn(findLineItemLocation(action.id));

        return newState
            .setIn(['invoice', 'total'], getTotal(newState));

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return state
            .set('errors', null);

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_ERROR:
        return state
            .set('errors', immutable.fromJS(action.errors));

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_RESET:
        return state
            .merge({
                editMode: false,
                errors: {},
                invoice: {}
            });

    default:
        return state;
    }
}
