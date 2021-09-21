const fetchProductByCategoryReducer = (
    productByCategory = { productByCategory: [], error: "" },
    action
  ) => {
    switch (action.type) {
      case "FETCH_PRODUCT_BY_CATEGORY":
        return { ...productByCategory };
      case "FETCH_PRODUCT_BY_CATEGORY_SUCCEEDED":
        return { productByCategory: action.receivedProducts.data, error: "" };
      case "FETCH_PRODUCT_BY_CATEGORY_FAILED":
        return { productByCategory: [], error: action.error };
      default:
        return productByCategory; //state does not change
    }
  };
  
  export default fetchProductByCategoryReducer;
  