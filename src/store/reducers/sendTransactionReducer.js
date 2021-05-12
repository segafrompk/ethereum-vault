const sendTransactionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RETURN_TRANSACTION_RECEIPT':
            return (state = action.payload ?? state);
        default:
            return state;
    }
};

export default sendTransactionReducer;
