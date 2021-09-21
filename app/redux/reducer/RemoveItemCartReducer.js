const removeItemCart = (Cart = { Cart: [], message: "" }, action) => {
  switch (action.type) {
    case "REMOVE_ITEM_CART":
      return { ...Cart };
    case "REMOVE_ITEM_CART_SUCCEEDED":
      return {
        // Cart: action.receivedProducts.data,
        Cart: [],
        message: "Removed Successfully",
      };
    case "REMOVE_ITEM_CART_FAILED":
      return { Cart: [], message: action.error };
    case "REMOVE_ITEM_CART_RESET":
      return { Cart: [], message: "" };
    default:
      return Cart; //state does not change
  }
};

export default removeItemCart;
