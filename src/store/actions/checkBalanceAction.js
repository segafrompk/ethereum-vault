export const checkBalanceAction = (address = '') => {
    return {
        type: 'CHECK_BALANCE',
        payload: address,
    };
};
