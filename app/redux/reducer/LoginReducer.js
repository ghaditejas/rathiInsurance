const loginReducers = (login = { login: [] }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...login };
    case "LOGIN_SUCCEEDED":
      return { login: action.loginData.data };
    case "LOGIN_FAILED":
      return { login: [], message: action.error };
    case "RESET_LOGIN":
      return { ...login, message: "" };
    default:
      return login;
  }
};

export default loginReducers;
