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
        <div className='address-list-container'>
            <AddressSave savedAddresses={savedAddresses} />
            <div className='address-list'>
                {addressList.length > 0 && addressList}
            </div>
        </div>
    );
};

export default AddressList;
