const setLoader = (Loader = { loader: false}, action) => {
    switch (action.type) {
      case "SET_LOADER_STATUS":
        return { loader: action.loaderStatus };
      default:
        return Loader; //state does not change
    }
  };
  
  export default setLoader;
  