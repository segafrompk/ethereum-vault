import { walletLogin } from '../../services/ethers';

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return (state = walletLogin(action.payload) ?? state);
        default:
            return state;
    }
};

export default loginReducer;
