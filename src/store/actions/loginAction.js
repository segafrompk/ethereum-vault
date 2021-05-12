export const loginAction = (privateKey = '') => {
    return {
        type: 'LOGIN',
        payload: privateKey,
    };
};
