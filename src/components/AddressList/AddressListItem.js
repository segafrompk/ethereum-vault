import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateInputFieldsExternalAction } from '../../store/actions/updateInputFieldsAction';

const AddressListItem = ({ savedAddressData }) => {
    const callAction = useDispatch();

    const updateAddress = () => {
        callAction(
            updateInputFieldsExternalAction({
                fieldToUpdate: 'depositToAddress',
                fieldValue: savedAddressData.address,
            })
        );
        document.querySelector('.deposit-amount.input-field').focus();
    };

    return (
        <div className='address-list-item' onClick={updateAddress}>
            <span>{savedAddressData.name + ':'}</span>
            <span>{savedAddressData.address}</span>
        </div>
    );
};

AddressListItem.defaultProps = {
    savedAddressData: {
        name: '',
        address: '',
    },
};

AddressListItem.propTypes = {
    savedAddressData: PropTypes.object,
};

export default AddressListItem;
