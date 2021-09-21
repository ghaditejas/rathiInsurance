const fetchAddressReducers = (
  addresses = { addresses: [], error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_ADDRESS":
      return { ...addresses };
    case "FETCH_ADDRESS_SUCCEEDED":
      return { addresses: action.receivedAddresses.data, error: "" };
    case "FETCH_ADDRESS_FAILED":
      return { addresses: [], error: action.error };
    default:
      return addresses; //state does not change
  }
};

export default fetchAddressReducers;
