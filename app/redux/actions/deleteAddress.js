const deleteAddress = (params) => ({
    type: "DELETE_ADDRESS",
    params,
});

const deleteAddressSucceeded = (message) => ({
    type: "DELETE_ADDRESS_SUCCEEDED",
    message,
});

const deleteAddressFailed = (error) => ({
    type: "DELETE_ADDRESS_FAILED",
    error,
});

export { deleteAddress, deleteAddressSucceeded, deleteAddressFailed };
