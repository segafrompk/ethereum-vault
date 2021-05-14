import { ethers } from 'ethers';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ transactionData }) => {
    return (
        <div className='transaction-history-item'>
            {transactionData && (
                <>
                    <div className='transaction-history-item-ammount'>
                        {ethers.utils.formatUnits(transactionData.value._hex)}
                    </div>
                    <div className='transaction-history-info'>
                        <span className='transaction-history-item-from'>
                            {'From:'} <br /> {transactionData.from}
                        </span>
                        <span className='transaction-history-item-to'>
                            {'To:'} <br /> {transactionData.to}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

TransactionHistoryItem.defaultProps = {
    transactionData: {},
};

TransactionHistoryItem.propTypes = {
    transactionData: PropTypes.object,
};

export default TransactionHistoryItem;
