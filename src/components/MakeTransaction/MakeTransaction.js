import { useSelector, useDispatch } from 'react-redux';
import { ethers, Wallet } from 'ethers';
import { sendTransactionAction } from '../../store/actions/sendTransactionAction';
import Input from '../Input';
import Button from '../Button';
import { notifyError } from '../../helpers/toasts';
import { updateInputFieldsExternalAction } from '../../store/actions/updateInputFieldsAction';
import PropTypes from 'prop-types';

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
            callAction(
                updateInputFieldsExternalAction({
                    fieldToUpdate: 'depositToAddress',
                    fieldValue: '',
                })
            );
            callAction(
                updateInputFieldsExternalAction({
                    fieldToUpdate: 'depositAmmount',
                    fieldValue: '',
                })
            );
        } else if (!ethers.utils.isAddress(depositToAddressValue)) {
            notifyError('Not a valid ethereum wallet address');
        } else if (isNaN(depositAmmountValue)) {
            notifyError('Entered ammount is not a number!');
        } else if (depositAmmountValue > balance) {
            notifyError("You don't have enouth ETH");
        } else if (depositAmmountValue < 0) {
            notifyError('Ammount of ETH must be positive');
        }
    };
    return (
        <div className='make-transaction'>
            <label htmlFor='depositToAddress'>
                Please enter address you want to send ether to:
            </label>
            <Input
                name='depositToAddress'
                customClass='deposit-to-address'
                placeholder='Ethereum wallet address'
            />
            <label htmlFor='depositAmmount'>
                How much ether do you want to deposit?
            </label>
            <Input
                name='depositAmmount'
                customClass='deposit-amount'
                placeholder='ETH ammount'
            />
            <Button
                buttonText='Deposit!'
                customClass='deposit-button'
                buttonAction={depositEther}
            />
        </div>
    );
};

MakeTransaction.defaultProps = {
    wallet: {},
};

MakeTransaction.propTypes = {
    wallet: PropTypes.instanceOf(Wallet),
};

export default MakeTransaction;
