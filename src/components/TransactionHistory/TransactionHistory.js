import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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
        <div className='transaction-history'>
            <TransactionHistoryList historyData={transactionHistory} />
            <Button buttonAction={refreshTransactionHistory} refresh={true} />
        </div>
    );
};

TransactionHistory.defaultProps = {
    address: '',
};

TransactionHistory.propTypes = {
    address: PropTypes.string,
};

export default TransactionHistory;
