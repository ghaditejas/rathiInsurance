import { put, takeLatest, call } from "redux-saga/effects";

import { Api } from "./api";

function* login(params) {
  try {
    let loginParams = {
      method: "POST",
      url: "/login",
      requestBody: params.params.params
    }

    const loginData = yield Api.apiCall(loginParams);
    // console.log("loginData==>", loginData);

    if (loginData.status === "SUCCESS" || loginData.status === "00") {
      yield put({ type: "LOGIN_SUCCEEDED", loginData: loginData }); // dispatch FETCH_SUCCEEDED action

      localStorage.setItem("Token", JSON.stringify(loginData.data.token));
      localStorage.setItem("User", JSON.stringify(loginData.data));//persisten login details
      yield put({
        type: "GET_CART_ITEM", url: "/shop/cart/" + loginData.data.uuid, params: {
          params: null,
        }, method: "GET"
      })
      params.params.history.replace(params.params.pathToNavigate);
    } else {
      yield put({ type: "LOGIN_FAILED", error: loginData.error });
    }
  } catch (error) {
    yield put({ type: "LOGIN_FAILED", error: "Service Unavailable" });
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN", login); //always fetch latest list
}
