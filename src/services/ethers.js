import { ethers } from 'ethers';

export const provider = new ethers.providers.EtherscanProvider(
    process.env.REACT_APP_NETWORK,
    process.env.REACT_APP_API_KEYREACT_APP_API_KEY
);

export const walletLogin = (personalKey) => {
    if (typeof personalKey == 'string') {
        try {
            const wallet = new ethers.Wallet(personalKey, provider);
            return wallet;
        } catch (e) {
            console.log(e);
        }
    } else {
        //TODO add snackbar to notify about key error
    }
};

export const checkBalance = (address) => {
    if (typeof address == 'string') {
        try {
            const balance = provider.getBalance(address);
            return balance;
        } catch (e) {
            console.log(e);
        }
    } else {
        //TODO add snackbar to notify about address error
    }
};

export const checkTransactionHistory = (address) => {
    if (typeof address == 'string') {
        try {
            const history = provider.getHistory(address);
            return history;
        } catch (e) {
            console.log(e);
        }
    } else {
        //TODO add snackbar to notify about address error
    }
};

export const sendTransaction = async (wallet, transactionData) => {
    try {
        const transaction = await wallet.sendTransaction(transactionData);
        await transaction.wait();
        return transaction;
    } catch (e) {
        //TODO add snackbar to notify about address error
        console.log(e);
    }
};
