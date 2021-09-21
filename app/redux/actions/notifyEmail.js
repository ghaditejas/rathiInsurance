const notifyEmail = (params) => ({
    type: "NOTIFY_EMAIL",
    params
});

const notifyEmailSucceeded = (apiResponse) => ({
    type: "NOTIFY_EMAIL_SUCCEEDED",
    apiResponse,
});

const notifyEmailFailed = (error) => ({
    type: "NOTIFY_EMAIL_FAILED",
    error,
});

export { notifyEmail, notifyEmailSucceeded, notifyEmailFailed };
