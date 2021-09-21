import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./api";
import * as homePageDataEn from '../../../dummyJson';
import * as homePageDataFr from '../../../dummyJson-fr';

function* fetchAllHomePageData(params) {
  try {
    const receivedProducts = yield Api.apiCall();
    // console.log("receivedProducts==>", receivedProducts);
    if (
      receivedProducts.status === "SUCCESS" ||
      receivedProducts.status === "00"
    ) {
      yield put({
        type: "HOMEPAGE_DATA_SUCCEEDED",
        receivedProducts: receivedProducts,
      }); // dispatch FETCH_SUCCEEDED action
    } else {
      yield put({
        type: "FETCH_ALL_PRODUCT_FAILED",
        error: receivedProducts.error,
      });
    }
  } catch (error) {
    yield put({ type: "HOMEPAGE_DATA_SUCCEEDED", data: params.params === 'en' ? homePageDataEn:homePageDataFr});
  }
}

export function* watchHomePage() {
  yield takeLatest("HOMEPAGE_DATA", fetchAllHomePageData); //always fetch latest list
}
