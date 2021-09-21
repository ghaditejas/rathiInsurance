const addItemCart = (params) => ({
  type: "ADD_ITEM_CART",
  params,
});

const addItemCartSucceeded = (receivedProducts) => ({
  type: "ADD_ITEM_CART_SUCCEEDED",
  receivedProducts,
});

const addItemCartFailed = (error) => ({
  type: "ADD_ITEM_CART_FAILED",
  error,
});

const addItemCartReset = (error) => ({
  type: "ADD_ITEM_CART_RESET",
  error,
});

export { addItemCart, addItemCartSucceeded, addItemCartFailed, addItemCartReset };
