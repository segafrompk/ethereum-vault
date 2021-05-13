import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/actions/loginAction';
import { notifyError } from '../helpers/toasts';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
    const login = useDispatch();
    const inputPersonalKey = useSelector(
        (state) => state.updateInputFieldReducer.personalKeyInput
    );

    const loginToWallet = (key = '') => {
        let validKey;
        if (key.startsWith('0x')) {
            key.length === 66 ? (validKey = true) : (validKey = false);
        } else if (key.length === 64) {
            key = '0x' + key;
            validKey = true;
        } else {
            validKey = false;
        }

        if (validKey) {
            window.localStorage.setItem('ethereumPersonalKey', key);
            login(loginAction(key));
        } else {
            notifyError('Personal key is not valid!');
        }
    };

    const storedKey = window.localStorage.getItem('ethereumPersonalKey');
    if (storedKey) {
        login(loginAction(storedKey));
        return <div>You are being logged in!</div>;
    } else {
        return (
            <div>
                <Input
                    name='personalKeyInput'
                    customClass='personal-key-input'
                    placeholder='Please insert your wallet`s personal key (don`t forget "0x" at the start!)'
                />
                <Button
                    buttonAction={() => loginToWallet(inputPersonalKey)}
                    buttonText='Submit'
                />
            </div>
        );
    }
};

export default Login;
