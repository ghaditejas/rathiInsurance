import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";

function* SearchPRODUCT(params) {
  // console.log('here');
  try {
    let res = yield axios.post(
      `${API_HOST}/shop/product`,
      { languageCode: "en" },
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    // console.log('response',res);
  } catch {
    console.log("error");
    yield put({
      type: "searchProductError",
      payload: { message: "Service Unavailable Try again later" },
    });
  }
}

export function* watchSearchProduct() {
  yield takeLatest("SEARCH_PRODUCT", SearchPRODUCT);
}
