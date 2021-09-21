const fetchProductCategoriesReducers = (
  productCategories = { productCategories: [], error: "" },
  action
) => {
  switch (action.type) {
    case "FETCH_PRODUCT_CATEGORIES":
      return { ...productCategories };
    case "FETCH_PRODUCT_CATEGORIES_SUCCEEDED":
      return {
        productCategories: action.receivedProductCategories.data,
        error: "",
      };
    case "FETCH_PRODUCT_CATEGORIES_FAILED":
      return { productCategories: [], error: action.error };
    default:
      return productCategories; //state does not change
  }
};

export default fetchProductCategoriesReducers;
