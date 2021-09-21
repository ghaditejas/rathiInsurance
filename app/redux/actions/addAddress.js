const addAddress = (params, method) => ({
  type: "ADD_ADDRESS",
  params,
  method
});

const addAddressSucceeded = (addedAddress) => ({
  type: "ADD_ADDRESS_SUCCEEDED",
  addedAddress,
});

const addAddressFailed = (error) => ({
  type: "ADD_ADDRESS_FAILED",
  error,
});

export { addAddress, addAddressSucceeded, addAddressFailed };
