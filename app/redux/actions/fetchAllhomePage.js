const fetchAllHomePageData = (url, params, method) => ({
    type: "HOMEPAGE_DATA",
    url,
    params,
    method,
  });
  
  const fetchAllHomePageDataSucceeded = (receivedProducts) => ({
    type: "HOMEPAGE_DATA_SUCCEEDED",
    receivedProducts,
  });
  
  const fetchAllHomePageDataFailed = (error) => ({
    type: "HOMEPAGE_DATA_FAILED",
    error,
  });
  
  export { fetchAllHomePageData, fetchAllHomePageDataSucceeded, fetchAllHomePageDataFailed };
  