import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { checkBalanceAction } from '../../store/actions/checkBalanceAction';
import QRCode from 'qrcode.react';
import Button from '../Button';
import PropTypes from 'prop-types';

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
                <div className='qr-address-container'>
                    <QRCode
                        size={200}
                        value={address}
                        includeMargin={true}
                        renderAs='svg'
                        className='qr-code'
                        bgColor='none'
                        fgColor='white'
                    />
                    <span>{address}</span>
                </div>
            )}

            {currentBalance !== '' && (
                <span className='balance-value'>
                    {ethers.utils.formatUnits(currentBalance) + ' ETH'}
                </span>
            )}
            <Button buttonAction={refreshBalance} refresh={true} />
        </div>
    );
};

Balance.defaultProps = {
    address: '',
};

Balance.propTypes = {
    address: PropTypes.string,
};

export default Balance;
