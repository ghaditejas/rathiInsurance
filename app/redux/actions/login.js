const loginAction = (params) => {
  return {
    type: "LOGIN",
    params,
  };
};

const loginSuccessAction = (token) => {
  return {
    type: "LOGIN_SUCCEEDED",
    token,
  };
};

const loginFailedAction = (error) => {
  return {
    type: "LOGIN_FAILED",
    error,
  };
};

const resetLoginError = () => {
  return {
    type: "RESET_LOGIN"
  }
}
export { loginAction, loginSuccessAction, loginFailedAction, resetLoginError };
