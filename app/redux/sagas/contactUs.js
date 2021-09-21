import { put, takeLatest, all } from "redux-saga/effects";
import { Api } from "./api";
import { API_HOST } from "../../lib/constants/assets";

function* ContactUS(params) {
  try {
    const contactUsParams = {
      method: "POST",
      url: "/email",
      requestBody: params.contactUsDetails
    }

    let res = yield Api.apiCall(contactUsParams)

    if (res.status === "SUCCESS" || res.status === "00") {
      yield put({ type: "ContactUS", payload: res.data.message });
    } else {
      yield put({
        type: "ContactUsError",
        payload: { message: res.data.message },
      });
    }
  } catch {
    yield put({
      type: "ContactUsError",
      payload: { message: "Service Unavailable Try again later" },
    });
  }
}

function* ResetContact() {
  yield put({ type: "ResetContactUS" });
}

export function* watchContact() {
  yield takeLatest("CONTACT_US", ContactUS);
  yield takeLatest("RESET_CONTACT_US", ResetContact);
}

