export default (state = {}, action) => {
  switch (action.type) {
    case "searchProduct":
      console.log(action);
      return {
        ...state,
        SearchProductStatus: true,
        message: "product displayed",
      };
    case "searchProductError":
      return {
        ...state,
        SearchProductStatus: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
};
