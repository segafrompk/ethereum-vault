import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import returnBalanceReducer from './reducers/checkBalanceReducer';
import returnTransactionHistoryReducer from './reducers/checkTransactionHistoryReducer';
import sendTransactionReducer from './reducers/sendTransactionReducer';
import saveAddressReducer from './reducers/saveAddressReducer';
import updateInputFieldReducer from './reducers/updateInputFieldsReducer';

const allReducers = combineReducers({
    wallet: loginReducer,
    balance: returnBalanceReducer,
    transactionHistory: returnTransactionHistoryReducer,
    sendTransactionReducer,
    saveAddressReducer,
    updateInputFieldReducer,
});

export default allReducers;
