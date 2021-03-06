const DEFAULT_STATE = {
    personalKeyInput: '',
    addContactName: '',
    addContactAddress: '',
    depositToAddress: '',
    depositAmmount: '',
};

const updateInputFieldReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return (state = {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            });
        case 'UPDATE_INPUT_EXTERNAL':
            return (state = {
                ...state,
                [action.payload.fieldToUpdate]: action.payload.fieldValue,
            });
        default:
            return state;
    }
};

export default updateInputFieldReducer;
