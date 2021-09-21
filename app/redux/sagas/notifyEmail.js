import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* notifyMeEmail(params) {
  console.log('notify me called', params)
  try {
    let notifyEmailParams = {
      method: 'POST',
      url: "/notify-me",
      requestBody: {
        ...params.params, languageCode: localStorage.getItem('selectedLangCode'), countryCode: localStorage.getItem('countryCode'), vendorId: params.params.vendorId,
      }
    }

    const notifyMEResponse = yield Api.apiCall(notifyEmailParams);

    if (notifyMEResponse.status === "SUCCESS" || notifyMEResponse.status === "00") {
      notifyMEResponse.message = "You will be notified when this product is available in your country.";
      notifyMEResponse.productId = params.params.productId;
      yield put({ type: "NOTIFY_EMAIL_SUCCEEDED", apiResponse: notifyMEResponse });
    } else {
      notifyMEResponse.message = "Something went wrong. Try again later";
      notifyMEResponse.productId = params.params.productId;
      yield put({ type: "NOTIFY_EMAIL_FAILED", apiResponse: notifyMEResponse });
    }
  } catch (error) {
    yield put({ type: "NOTIFY_EMAIL_FAILED", error });
  }
}

export function* watchNotifyMeEmail() {
  yield takeLatest("NOTIFY_EMAIL", notifyMeEmail); //always fetch latest list
}
