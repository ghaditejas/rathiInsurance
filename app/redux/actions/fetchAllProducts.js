const fetchAllProduct = (params) => ({
  type: "FETCH_ALL_PRODUCT",
  params,
});

const fetchAllProductSucceeded = (receivedProducts) => ({
  type: "FETCH_ALL_PRODUCT_SUCCEEDED",
  receivedProducts,
});

const fetchAllProductFailed = (error) => ({
  type: "FETCH_ALL_PRODUCT_FAILED",
  error,
});

export { fetchAllProduct, fetchAllProductSucceeded, fetchAllProductFailed };
