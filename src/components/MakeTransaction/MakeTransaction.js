import { useSelector, useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import { sendTransactionAction } from '../../store/actions/sendTransactionAction';
import Input from '../Input';
import Button from '../Button';

const MakeTransaction = ({ wallet }) => {
    const callAction = useDispatch();
    const depositAmmountValue = useSelector(
        (state) => state.updateInputFieldReducer.depositAmmount
    );
    const depositToAddressValue = useSelector(
        (state) => state.updateInputFieldReducer.depositToAddress
    );
    const balance = useSelector((state) => state.balance);

    const depositEther = () => {
        if (
            ethers.utils.isAddress(depositToAddressValue) &&
            !isNaN(depositAmmountValue) &&
            depositAmmountValue > 0 &&
            depositAmmountValue < balance
        ) {
            callAction(
                sendTransactionAction(wallet, {
                    to: depositToAddressValue,
                    value: ethers.utils.parseUnits(
                        depositAmmountValue,
                        'ether'
                    ),
                })
            );
        }
    };
    return (
        <div>
            <Input
                name='depositToAddress'
                customClass='deposit-to-address'
                placeholder='Please enter address you want to send ether to'
            />{' '}
            <Input
                name='depositAmmount'
                customClass='deposit-amount'
                placeholder='How much ether do you want to deposit?'
            />
            <Button buttonText='Deposit!' buttonAction={depositEther} />
        </div>
    );
};

export default MakeTransaction;
