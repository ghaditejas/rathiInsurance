import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./api";

function* deleteAddress(params) {
    try {
        let UserInfo = JSON.parse(localStorage.getItem("User"));

        let addressParams = {
            method: 'DELETE',
            url: '/shop/address/remove',
            requestBody: params.params.params
        }
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });
        const deletedAddresses = yield Api.apiCall(addressParams);
        // console.log("deletedAddresses==>", deletedAddresses);
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
        if (deletedAddresses.status === "00") {
            yield put({ type: "DELETE_ADDRESS_SUCCEEDED", message: deletedAddresses.message });

            yield put({ type: "FETCH_ADDRESS", params: UserInfo.uuid })

        } else {
            yield put({ type: "DELETE_ADDRESS_FAILED", error: deletedAddresses.error });
        }
    } catch (error) {
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
        yield put({ type: "DELETE_ADDRESS_FAILED", error });
    }
}

export function* watchDeleteAddress() {
    yield takeLatest("DELETE_ADDRESS", deleteAddress); //always fetch latest list
}
