const returnBalanceReducer = (state = '', action) => {
    switch (action.type) {
        case 'RETURN_BALANCE':
            return (state = action.payload._hex ?? state);
        default:
            return state;
    }
};
export default returnBalanceReducer;
