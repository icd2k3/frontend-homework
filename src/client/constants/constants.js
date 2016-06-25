import keyMirror from 'keymirror';

export const

    ACTIONS = Object.freeze(keyMirror({
        CREATE_OR_EDIT_INVOICE_POPUP_CLOSE: null,
        CREATE_OR_EDIT_INVOICE_POPUP_CREATE: null,
        CREATE_OR_EDIT_INVOICE_POPUP_ERROR: null,
        CREATE_OR_EDIT_INVOICE_POPUP_RESET: null,
        FOOTER_CONTAINER_ADD_NEW_INVOICE: null,
        FOOTER_CONTAINER_RANDOMLY_GENERATE_INVOICES: null,
        INVOICE_FORM_ADD_LINE_ITEM: null,
        INVOICE_FORM_CHANGE_DUE_DATE: null,
        INVOICE_FORM_CHANGE_NAME: null,
        INVOICE_FORM_CHANGE_NOTES: null,
        LINE_ITEM_CHANGE_EXPENSE: null,
        LINE_ITEM_CHANGE_HOURS: null,
        LINE_ITEM_CHANGE_NOTE: null,
        LINE_ITEM_CHANGE_RATE: null,
        LINE_ITEM_CHANGE_TYPE: null,
        LINE_ITEM_REMOVE: null,
        NO_INVOICES_CTA_ADD_NEW_INVOICE: null,
        NO_INVOICES_CTA_RANDOMLY_GENERATE_INVOICES: null,
        TITLE_ADD_NEW_INVOICE: null
    })),

    LINE_ITEM_TYPES = [
        'labor',
        'materials',
        'expenses',
        'other'
    ];
