import { ACTIONS } from 'constants';

export function changeType(id, lineItemType) {
    return {
        id,
        lineItemType,
        type: ACTIONS.LINE_ITEM_CHANGE_TYPE
    };
}


export function changeHours(id, hours) {
    return {
        id,
        hours,
        type: ACTIONS.LINE_ITEM_CHANGE_HOURS
    };
}

export function changeRate(id, rate) {
    return {
        id,
        rate,
        type: ACTIONS.LINE_ITEM_CHANGE_RATE
    };
}

export function changeNote(id, note) {
    return {
        id,
        note,
        type: ACTIONS.LINE_ITEM_CHANGE_NOTE
    };
}

export function changeExpense(id, expense) {
    return {
        expense,
        id,
        type: ACTIONS.LINE_ITEM_CHANGE_EXPENSE
    };
}
