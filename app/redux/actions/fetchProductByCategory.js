const fetchProductByCategory = (params) => ({
    type: "FETCH_PRODUCT_BY_CATEGORY",
    params,
  });
  
  const fetchProductByCategorySucceeded = (receivedProducts) => ({
    type: "FETCH_PRODUCT_BY_CATEGORY_SUCCEEDED",
    receivedProducts,
  });
  
  const fetchProductByCategoryFailed = (error) => ({
    type: "FETCH_PRODUCT_BY_CATEGORY_FAILED",
    error,
  });
  
  export { fetchProductByCategory, fetchProductByCategorySucceeded, fetchProductByCategoryFailed };
  