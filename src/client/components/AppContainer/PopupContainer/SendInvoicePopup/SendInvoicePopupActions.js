import { ACTIONS } from 'constants';

export function send(invoice, recipientsEmail) {
    const invoiceJSON = JSON.stringify(invoice.toJS(), null, 4);

    console.log('\n\n------------');
    console.log('INVOICE JSON');
    console.log('------------');
    console.log(invoiceJSON);
    console.log('------------\n\n');

    return {
        invoiceId: invoice.get('id'),
        invoiceJSON,
        recipientsEmail,
        type: recipientsEmail ? ACTIONS.SEND_INVOICE_POPUP_SEND : ACTIONS.SEND_INVOICE_POPUP_SEND_ERROR
    };
}

export function close() {
    return {
        type: ACTIONS.SEND_INVOICE_POPUP_CLOSE
    };
}

export function reset() {
    return {
        type: ACTIONS.SEND_INVOICE_POPUP_RESET
    };
}
