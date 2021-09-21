import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* warrantyActivate(params) {
    console.log('saga=>', params)
    try {
        let warrantyActivationParams = {
            method: "POST",
            url: "/warranty",
            requestBody: params.params,
            hasImage: true
        }
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });

        const warrantyActivate = yield Api.apiCall(warrantyActivationParams);
        // console.log("warrantyActivate==>", warrantyActivate);
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
        if (warrantyActivate.status === "SUCCESS" || warrantyActivate.status === "00") {
            warrantyActivate.status = true;
            warrantyActivate.message = "We have received your warranty activation request. Thank you."
            yield put({ type: "WARRANTY_ACTIVATE_SUCCEEDED", data: warrantyActivate });
        } else {
            warrantyActivate.status = false;
            yield put({ type: "WARRANTY_ACTIVATE_FAILED", data: warrantyActivate, error: warrantyActivate.error, message: warrantyActivate.error });
        }
    } catch (error) {
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
        yield put({ type: "WARRANTY_ACTIVATE_FAILED", error });
    }
}

export function* watchWarrantyActivate() {
    yield takeLatest("WARRANTY_ACTIVATE", warrantyActivate); //always fetch latest list
}
