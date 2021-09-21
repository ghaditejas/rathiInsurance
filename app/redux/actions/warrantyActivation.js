const warrantyActivate = (params) => ({
    type: "WARRANTY_ACTIVATE",
    params,
});

const warrantyActivateSucceeded = (successMessage) => ({
    type: "WARRANTY_ACTIVATE_SUCCEEDED",
    successMessage,
});

const warrantyActivateFailed = (error) => ({
    type: "WARRANTY_ACTIVATE_FAILED",
    error,
});
export const resetWarrantyActivation = () => {
    return {
        type: "RESET_WARRANTY_ACTIVATE",
    };
};


export { warrantyActivate, warrantyActivateSucceeded, warrantyActivateFailed };