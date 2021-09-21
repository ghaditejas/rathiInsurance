const forgotPasswordReducers = (password = { password: [], error: "" }, action) => {
  switch (action.type) {
    case "FORGOT_PASSWORD":
      return { ...password };
    case "FORGOT_PASSWORD_SUCCEEDED":
      return {
        password: action.data,
        message: action.data.message
      };
    case "FORGOT_PASSWORD_FAILED":
      return { password: {}, error: action.error };
    default:
      return password; //state does not change
  }
};

export default forgotPasswordReducers;
