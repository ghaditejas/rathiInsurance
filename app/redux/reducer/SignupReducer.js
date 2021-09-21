const signupReducers = (signup = { signup: [] }, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...signup };
    case "SIGNUP_SUCCEEDED":
      return { signup: action.signupData , message:action.signupData.message};
    case "SIGNUP_FAILED":
      return { signup: [],message:action.error };
    case "RESET_SIGNUP":
      return{...signup,message:''}
    default:
      return signup;
  }
};

export default signupReducers;
