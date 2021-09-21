const forgotPassword = (params) => ({
    type: "FORGOT_PASSWORD",
    params,
});

const forgotPasswordSucceeded = (forgotPassRes) => ({
    type: "FORGOT_PASSWORD_SUCCEEDED",
    forgotPassRes,
});

const forgotPasswordFailed = (error) => ({
    type: "FORGOT_PASSWORD_FAILED",
    error,
});

export { forgotPassword, forgotPasswordSucceeded, forgotPasswordFailed };
