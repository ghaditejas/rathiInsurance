import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./api";

function* fetchAddress(params) {
  try {
    let addressParams = {
      method: "GET",
      url: `/shop/address/${params.params}`,
      requestBody: null
    }

    yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });

    const receivedAddresses = yield Api.apiCall(addressParams);
    // console.log("receivedAddresses==>", receivedAddresses);
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });

    if (receivedAddresses.status === "00") {
      yield put({ type: "FETCH_ADDRESS_SUCCEEDED", receivedAddresses: receivedAddresses });
    } else {
      yield put({ type: "FETCH_ADDRESS_FAILED", error: receivedAddresses.error });
    }
  } catch (error) {
    yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
    yield put({ type: "FETCH_ADDRESS_FAILED", error });
  }
}

export function* watchfetchAddress() {
  yield takeLatest("FETCH_ADDRESS", fetchAddress); //always fetch latest list
}
