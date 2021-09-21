const deleteAddressReducers = (
    message = { message: '', error: "" },
    action
) => {
    switch (action.type) {
        case "DELETE_ADDRESS":
            return { ...message };
        case "DELETE_ADDRESS_SUCCEEDED":
            return { message: action.message, error: "" };
        case "DELETE_ADDRESS_FAILED":
            return { message: '', error: action.error };
        default:
            return message; //state does not change
    }
};

export default deleteAddressReducers;
