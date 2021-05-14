export const updateInputFieldsAction = (newValue = {}) => {
    return {
        type: 'UPDATE_INPUT',
        payload: newValue,
    };
};

export const updateInputFieldsExternalAction = (newValueData = {}) => {
    return {
        type: 'UPDATE_INPUT_EXTERNAL',
        payload: newValueData,
    };
};
