import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Account from './views/Account';
import Login from './views/Login';

function App() {
    const wallet = useSelector((state) => state.wallet);
    return (
        <div className='App'>
            <ToastContainer />
            {wallet.address && ethers.utils.isAddress(wallet.address) && (
                <Account />
            )}
            {(!wallet.address || !ethers.utils.isAddress(wallet.address)) && (
                <Login />
            )}
        </div>
    );
}

export default App;
