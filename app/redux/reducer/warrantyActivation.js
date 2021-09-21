const warrantyActivationReducers = (warrantyActivate = { warrantyActivate: {}, error: "", message: '' }, action) => {
    switch (action.type) {
        case "WARRANTY_ACTIVATE":
            return { ...warrantyActivate };
        case "WARRANTY_ACTIVATE_SUCCEEDED":
            return {
                data: action.data,
                error: "",
            };
        case "WARRANTY_ACTIVATE_FAILED":
            return { data: action.data, error: action.error, message: action.message };
        case "RESET_WARRANTY_ACTIVATE":
            return {
                data: {},
                error: "",
                massage: ""
            }
        default:
            return warrantyActivate; //state does not change
    }
};

export default warrantyActivationReducers;
