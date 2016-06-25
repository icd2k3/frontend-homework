import keyMirror from 'keymirror';

export const

    ACTIONS = Object.freeze(keyMirror({
        CREATE_OR_EDIT_INVOICE_POPUP_CLOSE: null,
        CREATE_OR_EDIT_INVOICE_POPUP_CREATE: null,
        CREATE_OR_EDIT_INVOICE_POPUP_ERROR: null,
        CREATE_OR_EDIT_INVOICE_POPUP_RESET: null,
        CREATE_OR_EDIT_INVOICE_POPUP_SAVE: null,
        FOOTER_CONTAINER_ADD_NEW_INVOICE: null,
        FOOTER_CONTAINER_RANDOMLY_GENERATE_INVOICES: null,
        INVOICE_FORM_DUE_DATE_CHANGE: null,
        INVOICE_FORM_EDIT_OPTIONS_DELETE: null,
        INVOICE_FORM_EDIT_PAYMENT_STATUS_CHANGE: null,
        INVOICE_FORM_LINE_ITEMS_FOOTER_ADD_LINE_ITEM: null,
        INVOICE_FORM_NAME_CHANGE: null,
        INVOICE_FORM_NOTES_CHANGE: null,
        INVOICE_ROW_EDIT_INVOICE: null,
        INVOICE_ROW_SEND_INVOICE: null,
        LINE_ITEM_CHANGE_EXPENSE: null,
        LINE_ITEM_CHANGE_HOURS: null,
        LINE_ITEM_CHANGE_NOTE: null,
        LINE_ITEM_CHANGE_RATE: null,
        LINE_ITEM_CHANGE_TYPE: null,
        LINE_ITEM_REMOVE: null,
        NO_INVOICES_CTA_ADD_NEW_INVOICE: null,
        NO_INVOICES_CTA_RANDOMLY_GENERATE_INVOICES: null,
        SEND_INVOICE_POPUP_CLOSE: null,
        SEND_INVOICE_POPUP_RESET: null,
        SEND_INVOICE_POPUP_SEND: null,
        SORT_BY: null,
        TITLE_ADD_NEW_INVOICE: null
    })),

    LINE_ITEM_TYPES = [
        'labor',
        'materials',
        'expenses',
        'other'
    ];
