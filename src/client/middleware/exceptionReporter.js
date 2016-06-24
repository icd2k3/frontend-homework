export default (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception error stack ===>', err, 'state at error is  ===>', store.getState().toJS());
        throw err;
    }
};
