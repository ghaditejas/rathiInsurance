import { API_HOST } from "../../lib/constants/assets";
import { NewPrductJson } from "../../../productJson";

function* apiCall(params) {
  console.log('api params==>', params)
  let path = `${API_HOST}${params.url}`;
  let token = JSON.parse(localStorage.getItem("Token"));
  var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  if (params.url !== "/login" && token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  var requestOptions = {
    method: params.method,
    headers: myHeaders,
    redirect: "follow",
  };


  if (params.requestBody) {
    if (params.hasImage) {
      requestOptions.body = params.requestBody;
    } else {
      var raw = JSON.stringify(params.requestBody);
      requestOptions.body = raw;
    }
  }

  const response = yield fetch(path, requestOptions).then(function (response) {
    let res = { status: "ERROR", message: "" };
    if (response.status === 401) {
      res.message = "Your session has expired. Please login to continue";
      localStorage.removeItem("Token");
      params.params.history.replace("/login");
      return res;
    } else if (response.status === 404) {
      res.message = "Page not found";
      return res;
    } else if (response.status === 500) {
      res.message = "Service temporarily unavailable";
      return res;
    } else {
      return response.json();
    }
  });
  return response;
}

function* productApiCall(params) {
  return NewPrductJson;
}

export const Api = {
  apiCall,
  productApiCall,
};
