import immutable from 'immutable';
import moment from 'moment';
import sillyname from 'sillyname';
import { ACTIONS, LINE_ITEM_TYPES } from 'constants';
import { generateId, convertNumberToCurrency } from 'utils';

export default function(
    state = immutable.fromJS({
        invoices: null
    }), action = {}) {

    switch (action.type) {

    case ACTIONS.CREATE_OR_EDIT_INVOICE_POPUP_CREATE:
        return state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).push(action.invoice.set('id', generateId())));

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
                    hours = lineItemType === 'labor' ? String(Math.random() * 999) : null,
                    rate = lineItemType === 'labor' ? String(Math.random() * 999) : null,
                    total = lineItemType === 'labor' ? hours * rate : Math.random() * 999;

                lineItems.push({
                    hours,
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
                note: 'Random note test',
                total: convertNumberToCurrency(grandTotal)
            }));
        }

        return state
            .set('invoices', (state.get('invoices') || immutable.fromJS([])).concat(randomInvoices));

    default:
        return state;
    }
}
