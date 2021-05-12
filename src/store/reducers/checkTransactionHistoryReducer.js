const returnTransactionHistoryReducer = (state = '', action) => {
    switch (action.type) {
        case 'RETURN_TRANSACTION_HISTORY':
            return (state = action.payload ?? state);
        default:
            return state;
    }
};
export default returnTransactionHistoryReducer;
