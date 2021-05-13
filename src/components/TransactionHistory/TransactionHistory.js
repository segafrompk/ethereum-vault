import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkTransactionHistoryAction } from '../../store/actions/checkTransactionHistoryAction';
import Button from '../Button';
import TransactionHistoryList from './TransactionHistoryList';

const TransactionHistory = ({ address }) => {
    const getTransactionHistory = useDispatch();
    useEffect(() => {
        getTransactionHistory(checkTransactionHistoryAction(address));
    }, [address, getTransactionHistory]);

    const refreshTransactionHistory = () => {
        getTransactionHistory(checkTransactionHistoryAction(address));
    };

    const transactionHistory = useSelector((state) => state.transactionHistory);
    return (
        <div>
            <TransactionHistoryList historyData={transactionHistory} />
            <Button
                buttonAction={refreshTransactionHistory}
                buttonText='refresh!'
            />
        </div>
    );
};

export default TransactionHistory;
