import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* forgotPassword(params) {
  try {
    let forgotPassParams = {
      url: '/reset-password/new',
      method: 'POST',
      requestBody: params.params
    }

    const forgotPass = yield Api.apiCall(forgotPassParams);

    if (forgotPass.status === "SUCCESS" || forgotPass.status === "00") {
      yield put({ type: "FORGOT_PASSWORD_SUCCEEDED", data: forgotPass });

    } else {
      yield put({ type: "FORGOT_PASSWORD_FAILED", error: forgotPass.error });
    }
  } catch (error) {
    yield put({ type: "FORGOT_PASSWORD_FAILED", error });
  }
}

export function* watchForgotPassword() {
  yield takeLatest("FORGOT_PASSWORD", forgotPassword); //always fetch latest list
}
