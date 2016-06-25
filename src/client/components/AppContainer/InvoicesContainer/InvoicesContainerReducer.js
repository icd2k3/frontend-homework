import immutable from 'immutable';
import moment from 'moment';
import sillyname from 'sillyname';
import { ACTIONS, LINE_ITEM_TYPES } from 'constants';
import { generateId } from 'utils';

export default function(
    state = immutable.fromJS({
        invoices: null,
        sortOrder: 'asc',
        sortParam: 'name'
    }), action = {}) {

    function findInvoiceLocation(id) {
        return ['invoices', state.get('invoices').findIndex((invoice) => invoice.get('id') === id)];
    }

    function getSortedState(currentState) {
        const sortOrder = currentState.get('sortOrder'),
            sortParam = currentState.get('sortParam');

        return currentState
            .set('invoices', currentState.get('invoices').sort((a, b) => {
                if (sortParam === 'total') {
                    // total needs to be sorted the opposite way compared to name/date (makes more sense that in ascending mode the most expensive invoices would be at the top)
                    if (sortOrder === 'asc') {
                        return a.get(sortParam) > b.get(sortParam) ? -1 : 1;
                    }
                    return a.get(sortParam) > b.get(sortParam) ? 1 : -1;
                } else if (sortOrder === 'asc') {
                    return a.get(sortParam) > b.get(sortParam) ? 1 : -1;
                }
                return a.get(sortParam) > b.get(sortParam) ? -1 : 1;
            }));
    }

    switch (action.type) {

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return getSortedState(state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).push(action.invoice.set('id', generateId()))));

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_SAVE:
        return getSortedState(state
            .setIn(findInvoiceLocation(action.invoice.get('id')), action.invoice));

    case ACTIONS.SORT_BY:
        return getSortedState(state
            .merge({
                sortOrder: action.sortParam === state.get('sortParam') && state.get('sortOrder') === 'asc' ? 'desc' : 'asc',
                sortParam: action.sortParam
            }));

    case ACTIONS.INVOICE_FORM_EDIT_OPTIONS_DELETE:
        return state
            .deleteIn(findInvoiceLocation(action.id));

    case ACTIONS.FOOTER_CONTAINER_RANDOMLY_GENERATE_INVOICES:
    case ACTIONS.NO_INVOICES_CTA_RANDOMLY_GENERATE_INVOICES:
        const randomInvoices = [],
            amount = 25;
        let grandTotal = 0;

        for (let i = 0; i < amount; i++) {
            const lineItemsAmount = 1 + Math.round(Math.random() * 10),
                lineItems = [];

            for (let j = 0; j < lineItemsAmount; j++) {
                const lineItemType = LINE_ITEM_TYPES[Math.round(Math.random() * 3)],
                    hours = lineItemType === 'labor' ? String(Math.round((Math.random() * 99) * 10) / 10) : null,
                    rate = lineItemType === 'labor' ? String(Math.round((Math.random() * 99) * 100) / 100) : null,
                    total = lineItemType === 'labor' ? hours * rate : Math.round((Math.random() * 999) * 100) / 100;

                lineItems.push({
                    hours,
                    id: generateId(),
                    note: sillyname(),
                    rate,
                    total,
                    type: lineItemType
                });

                grandTotal += total;
            }


            randomInvoices.push(immutable.fromJS({
                dueDate: moment().add(Math.round((Math.random() * 30) - 15), 'days').toDate().getTime() / 1000,
                id: generateId(),
                lineItems,
                name: sillyname(),
                notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a orci ut magna lobortis varius in et ex. Fusce accumsan finibus consequat. Suspendisse tellus sapien, rutrum ultricies enim at, aliquet vestibulum orci.',
                total: grandTotal
            }));
        }

        return getSortedState(state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).concat(randomInvoices)));

    default:
        return state;
    }
}
