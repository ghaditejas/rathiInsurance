const fetchAddress = (params) => ({
  type: "FETCH_ADDRESS",
  params,
});

const fetchAddressSucceeded = (receivedAddresses) => ({
  type: "FETCH_ADDRESS_SUCCEEDED",
  receivedAddresses,
});

const fetchAddressFailed = (error) => ({
  type: "FETCH_ADDRESS_FAILED",
  error,
});

export { fetchAddress, fetchAddressSucceeded, fetchAddressFailed };
