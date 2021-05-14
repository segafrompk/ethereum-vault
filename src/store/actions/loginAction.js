export const loginAction = (privateKey = '') => {
    return {
        type: 'LOGIN',
        payload: privateKey,
    };
};

export const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};
