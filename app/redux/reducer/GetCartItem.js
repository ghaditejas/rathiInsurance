const GetCartItem = (cartItem = { cartItem: [], error: "" }, action) => {
  switch (action.type) {
    case "GET_CART_ITEM":
      return { ...cartItem };
    case "GET_CART_ITEM_SUCCEEDED":
      return { cartItem: action.cartItem.data, error: "" };
    case "GET_CART_ITEM_FAILED":
      return { cartItem: [], error: action.error };
    case "SYNCED_SUCCEEDED":{
      return {cartItem:[],message:action.message}
    }
    default:
      return cartItem; //state does not change
  }
};

export default GetCartItem;
