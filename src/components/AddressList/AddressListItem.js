const AddressListItem = ({ savedAddressData }) => {
    return (
        <div>
            <span>{savedAddressData.name}</span>
            <span>{savedAddressData.address}</span>
        </div>
    );
};

export default AddressListItem;
