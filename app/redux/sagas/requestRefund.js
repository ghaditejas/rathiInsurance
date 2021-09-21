import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* requestRefund(params) {
  try {
    let UserInfo = JSON.parse(localStorage.getItem("User"));

    let requestRefundParams = {
      method: params.method,
      url: "/user/refund/order",
      requestBody: params.params.params
    }
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });

    const requestRefunded = yield Api.apiCall(requestRefundParams);
    console.log("requestRefunded==>", requestRefunded);
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
    if (requestRefunded.status === "SUCCESS" || requestRefunded.status === "00") {
      requestRefunded.message = 'Your request for refund has placed successfully.'
      yield put({ type: "REQUEST_REFUND_SUCCEEDED", requestRefunded: requestRefunded });

    } else {
      yield put({ type: "REQUEST_REFUND_FAILED", error: requestRefunded.error });
    }
  } catch (error) {
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
    yield put({ type: "REQUEST_REFUND_FAILED", error });
  }
}

export function* watchRequestRefund() {
  yield takeLatest("REQUEST_REFUND", requestRefund); //always fetch latest list
}
