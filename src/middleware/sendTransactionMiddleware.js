import { sendTransaction } from '../services/ethers';

export const sendTransactionMiddleware = (storeAPI) => (next) => (action) => {
    if (action.type === 'SEND_TRANSACTION') {
        sendTransaction(action.wallet, action.transactionData).then(
            (receipt) => {
                storeAPI.dispatch({
                    type: 'RETURN_TRANSACTION_RECEIPT',
                    payload: receipt,
                });
            }
        );
    }

    return next(action);
};
