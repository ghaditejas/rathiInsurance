const notifyEmailReducers = (email = { success: false, error: false }, action) => {
  switch (action.type) {
    case "NOTIFY_EMAIL":
      return { ...email };
    case "NOTIFY_EMAIL_SUCCEEDED":
      return {
        success: action.apiResponse,
        error: false,
      };
    case "NOTIFY_EMAIL_FAILED":
      return { success: false, error: action.apiResponse };
    default:
      return email; //state does not change
  }
};

export default notifyEmailReducers;
