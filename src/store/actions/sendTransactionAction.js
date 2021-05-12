export const sendTransactionAction = (wallet, transactionData) => {
    return {
        type: 'SEND_TRANSACTION',
        wallet,
        transactionData,
    };
};
