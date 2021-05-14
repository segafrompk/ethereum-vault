import { useSelector, useDispatch } from 'react-redux';
import Balance from '../components/Balance/Balance';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import AddressList from '../components/AddressList/AddressList';
import MakeTransaction from '../components/MakeTransaction/MakeTransaction';
import Button from '../components/Button';
import { logoutAction } from '../store/actions/loginAction';

const Account = () => {
    const wallet = useSelector((state) => state.wallet);
    const address = wallet.address;
    const callAction = useDispatch();
    const logOut = () => {
        window.localStorage.removeItem('ethereumPersonalKey');
        callAction(logoutAction());
    };
    return (
        <div className='account-view'>
            <Button
                customClass='logout'
                buttonAction={logOut}
                buttonText='Log out!'
            />
            <Balance address={address} />
            <MakeTransaction wallet={wallet} />
            <AddressList />
            <TransactionHistory address={address} />
        </div>
    );
};
export default Account;
