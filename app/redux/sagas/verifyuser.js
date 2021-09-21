import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";

function* VerifyUSER(params) {
  console.log('here');
  try {
    let res = yield axios.post(`${API_HOST}/verify`, {'token':params.verifyUserDetails, "languageCode":"en"}, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    if (res.data.status === "00") {
      yield put({ type: "verifyUser", payload: res.data.message });
      params.method.push('/confirmation/email');
      // console.log(res.data.message)
    } else {
      yield put({
        type: "verifyUserError",
        payload: { message: res.data.message },
        
      });
    }
  } catch {
    console.log('eror')
    yield put({
      type: "verifyUserError",
      payload: { message: "Service Unavailable Try again later" },
    });
  }
}


export function* watchVerify() {
  yield takeLatest("VERIFY_USER", VerifyUSER);
}