import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* addAddress(params) {
  try {
    let UserInfo = JSON.parse(localStorage.getItem("User"));

    let addressParams = {
      method: params.method,
      url: "/shop/address",
      requestBody: params.params.params
    }
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });

    const addedAddress = yield Api.apiCall(addressParams);
    // console.log("addedAddress==>", addedAddress);
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
    if (addedAddress.status === "SUCCESS" || addedAddress.status === "00") {
      yield put({ type: "ADD_ADDRESS_SUCCEEDED", addedAddress: addedAddress });

      yield put({ type: "FETCH_ADDRESS", params: UserInfo.uuid })
    } else {
      yield put({ type: "ADD_ADDRESS_FAILED", error: addedAddress.error });
    }
  } catch (error) {
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
    yield put({ type: "ADD_ADDRESS_FAILED", error });
  }
}

export function* watchAddAddress() {
  yield takeLatest("ADD_ADDRESS", addAddress); //always fetch latest list
}
