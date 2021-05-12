import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import checkBalanceReducer from './reducers/checkBalanceReducer';
import checkTransactionHistoryReducer from './reducers/checkTransactionHistoryReducer';
import sendTransactionReducer from './reducers/sendTransactionReducer';
import saveAddressReducer from './reducers/saveAddressReducer';

const allReducers = combineReducers({
    loginReducer,
    checkBalanceReducer,
    checkTransactionHistoryReducer,
    sendTransactionReducer,
    saveAddressReducer,
});

export default allReducers;
