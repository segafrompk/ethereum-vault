import { walletLogin } from '../../services/ethers';

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return (state = walletLogin(action.payload) ?? state);
        case 'LOGOUT':
            return (state = {});
        default:
            return state;
    }
};

export default loginReducer;
