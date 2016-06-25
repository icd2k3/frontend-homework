import { ACTIONS } from 'constants';

export function send(invoice) {
    console.log('\n\n\nSEND');
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
