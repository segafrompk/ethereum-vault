import { ethers } from 'ethers';
import { toast } from 'react-toastify';

export const provider = new ethers.providers.EtherscanProvider(
    process.env.REACT_APP_NETWORK,
    process.env.REACT_APP_API_KEYREACT_APP_API_KEY
);

const displayError = (message) => {
    toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const walletLogin = (personalKey) => {
    if (typeof personalKey == 'string') {
        try {
            const wallet = new ethers.Wallet(personalKey, provider);
            return wallet;
        } catch (e) {
            console.log(e);
        }
    } else {
        displayError('Invalid personal key');
    }
};

export const checkBalance = (address) => {
    if (ethers.utils.isAddress(address)) {
        try {
            const balance = provider.getBalance(address);
            return balance;
        } catch (e) {
            console.log(e);
        }
    } else {
        displayError('Invalid wallet address');
    }
};

export const checkTransactionHistory = (address) => {
    if (ethers.utils.isAddress(address)) {
        try {
            const history = provider.getHistory(address);
            return history;
        } catch (e) {
            console.log(e);
        }
    } else {
        displayError('Invalid wallet address');
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
