import { useSelector } from 'react-redux';
import AddressSave from './AddressSave';
import AddressListItem from './AddressListItem';

const AddressList = () => {
    const savedAddresses = useSelector((state) => state.saveAddressReducer);

    let addressList = [];
    if (savedAddresses && savedAddresses.length > 0) {
        addressList = savedAddresses.map((addressData) => {
            return (
                <AddressListItem
                    key={addressData.address}
                    savedAddressData={addressData}
                />
            );
        });
    }
    return (
        <div>
            <div>{addressList.length > 0 && addressList}</div>
            <AddressSave savedAddresses={savedAddresses} />
        </div>
    );
};

export default AddressList;
