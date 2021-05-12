import './App.scss';
// import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/actions/loginAction';
// import { checkTransactionHistoryAction } from './store/actions/checkTransactionHistoryAction';
// import { sendTransactionAction } from './store/actions/sendTransactionAction';
import { saveAddressAction } from './store/actions/saveAddressAction';

function App() {
    const walletLogin = useDispatch();
    walletLogin(
        loginAction(
            'c5e50756d60d5c83a6dfb61dd68f6f0be1a4966efd9dbf96f92b51ceaf462c11'
        )
    );
    const wallet = useSelector((state) => state.loginReducer);
    console.log(wallet);

    const transaction = (wallet) => {
        walletLogin(
            saveAddressAction({
                address: '0x7FeFecbC25da4c55Bc0BFc11391971bA46e11A54',
                name: 'Milan',
            })
        );
        // walletLogin(checkTransactionHistoryAction(wallet.address));
        // const history = useSelector(
        //     (state) => state.checkTransactionHistoryReducer
        // );
        // console.log(history);
        // walletLogin(
        //     sendTransactionAction(wallet, {
        //         to: '0x7FeFecbC25da4c55Bc0BFc11391971bA46e11A54',
        //         value: ethers.utils.parseUnits('0.1', 'ether'),
        //     })
        // );
        // const latestTransaction = useSelector(
        //     (state) => state.sendTransactionReducer
        // );
        // console.log(latestTransaction);
    };

    return (
        <div className='App'>
            <button onClick={() => transaction(wallet)}>Transaction!</button>
        </div>
    );
}

export default App;
