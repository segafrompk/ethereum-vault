import { ethers } from 'ethers';

const TransactionHistoryItem = ({ transactionData = {} }) => {
    return (
        <div>
            {transactionData && (
                <>
                    <div>{transactionData.from}</div>
                    <div>{transactionData.to}</div>
                    <div>
                        {ethers.utils.formatUnits(transactionData.value._hex)}
                    </div>
                </>
            )}
        </div>
    );
};

export default TransactionHistoryItem;
