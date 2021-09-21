const fetchAllProductReducers = (
  allProducts = { allProducts: [], error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCT":
      return { ...allProducts };
    case "FETCH_ALL_PRODUCT_SUCCEEDED":
      return { allProducts: action.receivedProducts.data, error: "" };
    case "FETCH_ALL_PRODUCT_FAILED":
      return { allProducts: [], error: action.error };
    default:
      return allProducts; //state does not change
  }
};

export default fetchAllProductReducers;
