import { useSelector, useDispatch } from 'react-redux';
import { saveAddressAction } from '../../store/actions/saveAddressAction';
import { notifyError, notifySuccess } from '../../helpers/toasts';
import Input from '../Input';
import Button from '../Button';
import { ethers } from 'ethers';

const AddressSave = ({ savedAddresses }) => {
    const saveEntered = useDispatch();
    const enteredAddress = useSelector(
        (state) => state.updateInputFieldReducer.addContactAddress
    );
    const enteredName = useSelector(
        (state) => state.updateInputFieldReducer.addContactName
    );
    // const savedAddresses = useSelector((state) => state.saveAddressReducer);

    const isProvidedAddressAlreadySaved = (addresses, addressToCheck) => {
        const matches = addresses.filter(
            (entry) => entry.address === addressToCheck
        );
        return matches.length > 0 ? true : false;
    };

    const saveEnteredAddress = () => {
        if (ethers.utils.isAddress(enteredAddress)) {
            if (
                !isProvidedAddressAlreadySaved(savedAddresses, enteredAddress)
            ) {
                saveEntered(
                    saveAddressAction({
                        name: enteredName,
                        address: enteredAddress,
                    })
                );
                notifySuccess('Address successfully saved');
            } else {
                notifyError('Entered address was already saved!');
            }
        } else {
            notifyError('Entered address is not valid!');
        }
    };

    return (
        <div>
            <Input
                name='addContactName'
                customClass='add-contact-name'
                placeholder='Enter name for address you want to save!'
            />

            <Input
                name='addContactAddress'
                customClass='add-contact-address'
                placeholder='Enter address you want to save!'
            />
            <Button
                buttonAction={saveEnteredAddress}
                buttonText='Save address!'
            />
        </div>
    );
};

export default AddressSave;
