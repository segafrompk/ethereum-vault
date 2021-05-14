import { useDispatch, useSelector } from 'react-redux';
import { updateInputFieldsAction } from '../store/actions/updateInputFieldsAction';

const PersonalKeyInput = ({ name, customClass, placeholder }) => {
    const input = useDispatch();

    const updateInput = (newValue) => {
        input(updateInputFieldsAction(newValue));
    };
    const inputValue = useSelector(
        (state) => state.updateInputFieldReducer[name]
    );
    return (
        <input
            name={name}
            className={customClass + ' input-field'}
            placeholder={placeholder}
            value={inputValue}
            onChange={updateInput}
        />
    );
};

export default PersonalKeyInput;
