const fetchAllHomePageReducers = (
    homePageData = { homePageData: [], error: "" },
    action
  ) => {
    switch (action.type) {
      case "HOMEPAGE_DATA":
        return { ...homePageData };
      case "HOMEPAGE_DATA_SUCCEEDED":
          console.log(action);
        return { homePageData: action.data, error: "" };
      case "HOMEPAGE_DATA_FAILED":
        return { homePageData: [], error: action.error };
      default:
        return homePageData; //state does not change
    }
  };
  
  export default fetchAllHomePageReducers;
  