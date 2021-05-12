import { checkBalance } from '../services/ethers';

export const checkBalanceMiddleware = (storeAPI) => (next) => (action) => {
    if (action.type === 'CHECK_BALANCE') {
        checkBalance(action.payload).then((balance) => {
            storeAPI.dispatch({ type: 'RETURN_BALANCE', payload: balance });
        });
    }

    return next(action);
};
