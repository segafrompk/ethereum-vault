import { checkTransactionHistory } from '../services/ethers';

export const checkTransactionHistoryMiddleware = (storeAPI) => (next) => (
    action
) => {
    if (action.type === 'CHECK_TRANSACTION_HISTORY') {
        checkTransactionHistory(action.payload).then((history) => {
            storeAPI.dispatch({
                type: 'RETURN_TRANSACTION_HISTORY',
                payload: history,
            });
        });
    }

    return next(action);
};
