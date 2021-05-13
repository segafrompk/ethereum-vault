export const checkTransactionHistoryAction = (address = []) => {
    return {
        type: 'CHECK_TRANSACTION_HISTORY',
        payload: address,
    };
};
