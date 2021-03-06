import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistoryList = ({ historyData = [] }) => {
    let listItems = [];
    if (historyData && historyData.length > 0) {
        listItems = historyData
            .map((transactionData) => (
                <TransactionHistoryItem
                    key={transactionData.timestamp}
                    transactionData={transactionData}
                />
            ))
            .reverse();
    }

    return <div className='transaction-history-list'>{listItems}</div>;
};

export default TransactionHistoryList;
