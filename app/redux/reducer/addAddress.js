const addAddressReducers = (adress = { adress: [], error: "" }, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return { ...adress };
    case "ADD_ADDRESS_SUCCEEDED":
      return {
        adress: action.addedAddress,
        error: "",
      };
    case "ADD_ADDRESS_FAILED":
      return { adress: [], error: action.error };
    default:
      return adress; //state does not change
  }
};

export default addAddressReducers;
