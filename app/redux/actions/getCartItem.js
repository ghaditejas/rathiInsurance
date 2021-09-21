const getCartItem = (url, params, method) => ({
    type: "GET_CART_ITEM",
    url,
    params,
    method,
  });
  
  const getCartItemSucceeded = (receivedProducts) => ({
    type: "GET_CART_ITEM_SUCCEEDED",
    receivedProducts,
  });
  
  const getCartItemFailed = (error) => ({
    type: "GET_CART_ITEM_FAILED",
    error,
  });
  
  export { getCartItem, getCartItemSucceeded, getCartItemFailed };
  