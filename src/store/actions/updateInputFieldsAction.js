export const updateInputFieldsAction = (newValue = '') => {
    return { type: 'UPDATE_INPUT', payload: newValue };
};
