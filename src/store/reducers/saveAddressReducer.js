const saveAddressReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_ADDRESS':
            return (state = [...state, action.payload]);
        default:
            return state;
    }
};

export default saveAddressReducer;
