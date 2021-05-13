import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { checkBalanceAction } from '../../store/actions/checkBalanceAction';
import QRCode from 'qrcode.react';
import Button from '../Button';

const Balance = ({ address }) => {
    const getBalance = useDispatch();
    const currentBalance = useSelector((state) => state.balance);

    useEffect(() => {
        getBalance(checkBalanceAction(address));
    }, [address, getBalance]);

    const refreshBalance = () => {
        getBalance(checkBalanceAction(address));
    };

    return (
        <div className='display-balance'>
            {ethers.utils.isAddress(address) && (
                <div>
                    <QRCode
                        size='300'
                        value={address}
                        includeMargin={true}
                        renderAs='svg'
                    />
                    <span>{address}</span>
                </div>
            )}

            {currentBalance !== '' && ethers.utils.formatUnits(currentBalance)}
            <Button buttonAction={refreshBalance} buttonText='refresh!' />
        </div>
    );
};

export default Balance;
