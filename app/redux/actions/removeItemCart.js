const removeItemCart = (params) => ({
  type: "REMOVE_ITEM_CART",
  params,
});

const removeItemCartSucceeded = (receivedProducts) => ({
  type: "REMOVE_ITEM_CART_SUCCEEDED",
  receivedProducts,
});

const removeItemCartFailed = (error) => ({
  type: "REMOVE_ITEM_CART_FAILED",
  error,
});

const removeItemCartReset = (error) => ({
  type: "REMOVE_ITEM_CART_RESET",
  error,
});

export { removeItemCart, removeItemCartSucceeded, removeItemCartFailed, removeItemCartReset };
