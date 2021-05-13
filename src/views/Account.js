import { useSelector } from 'react-redux';
import Balance from '../components/Balance/Balance';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import AddressList from '../components/AddressList/AddressList';
import MakeTransaction from '../components/MakeTransaction/MakeTransaction';

const Account = () => {
    const wallet = useSelector((state) => state.wallet);
    const address = wallet.address;
    return (
        <div>
            <Balance address={address} />
            <TransactionHistory address={address} />
            <AddressList />
            <MakeTransaction wallet={wallet} />
        </div>
    );
};
export default Account;
