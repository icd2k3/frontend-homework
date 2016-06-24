export function generateId() {
    return `${new Date().getTime()}${Math.round(Math.random() * 999999)}`;
}

export function convertNumberToCurrency(num) {
    if (!num) {
        return '0.00';
    }
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
