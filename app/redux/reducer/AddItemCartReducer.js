const addItemCart = (Cart = { Cart: {}, message: "" }, action) => {
  switch (action.type) {
    case "ADD_ITEM_CART":
      return { ...Cart };
    case "ADD_ITEM_CART_SUCCEEDED":
      return {
        Cart: action.itemAdd,
        // Cart:[],
        message: "Added Successfully",
      };
    case "ADD_ITEM_CART_FAILED":
      return { Cart: {}, message: action.error };
    case "ADD_ITEM_CART_RESET":
      return { Cart: {}, message: "", };
    default:
      return Cart; //state does not change
  }
};

export default addItemCart;
