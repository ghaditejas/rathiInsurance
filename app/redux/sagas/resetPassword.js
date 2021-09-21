import { put, takeLatest, all } from "redux-saga/effects";
import { Api } from "./api";


function* ResetPassword(params) {
    try {
        const resetPasswordParams = {
            method: "POST",
            url: "/reset-password",
            requestBody: params.resetPasswordDetails
        }

        let res = yield Api.apiCall(resetPasswordParams);
        console.log('res===>', res)

        if (res.status == "00") {
            yield put({ type: "ResetPasswordSucess", payload: res });
        } else {
            yield put({ type: "ResetPasswordError", payload: res });
        }
    } catch {
        yield put({
            type: "ResetPasswordError",
            payload: {
                message: "Service Unavailable Try again later"
            }
        });
    }
}

export function* watchReset() {
    yield takeLatest("RESET_PASSWORD", ResetPassword);
}
