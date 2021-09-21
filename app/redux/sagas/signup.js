import { put, takeLatest, call } from "redux-saga/effects";

import { Api } from "./api";

function* signup(params) {
  try {
    let signupParams = {
      method: "POST",
      url: "/signup",
      requestBody: params.params.params
    }
    const signupData = yield Api.apiCall(signupParams);
    // console.log("signupData==>", signupData);

    if (signupData.status === "SUCCESS" || signupData.status === "00") {
      yield put({ type: "SIGNUP_SUCCEEDED", signupData: signupData }); // dispatch FETCH_SUCCEEDED action
    } else {
      yield put({ type: "SIGNUP_FAILED", error: signupData.error });
    }
  } catch (error) {
    yield put({
      type: "SIGNUP_FAILED",
      error: "Service Unavailable PLease Try Again Later",
    });
  }
}

export function* watchSignup() {
  yield takeLatest("SIGNUP", signup); //always fetch latest list
}
