const countryCurrency = (Currency = { currency: {}, message: "" }, action) => {
  switch (action.type) {
    case "CURRENCY_CONVERSION":
      return { currency: action.countryCurrency };
    default:
      console.log(action);
      return Currency; //state does not change
  }
};

export default countryCurrency;
