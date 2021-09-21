export const signupAction = (params) => {
  return {
    type: "SIGNUP",
    params,
  };
};

export const signupSuccessAction = () => {
  return {
    type: "SIGNUP_SUCCEEDED",
  };
};

export const signupFailedAction = (error) => {
  return {
    type: "SIGNUP_SUCCEEDED",
    error,
  };
};

export const resetSignupError = () => {
  return {
    type: "RESET_SIGNUP",
  };
};
