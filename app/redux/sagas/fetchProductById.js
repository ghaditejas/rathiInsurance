import { put, takeLatest } from "redux-saga/effects";
import { PRODUCTBYIDDATA } from "../constants";
import { Api } from "./api";

function* fetchProductById(params) {
  console.log(params);
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: true,
  });
  try {
    let productParams, receivedProducts;
    if (params.id && Object.keys(params.id).length !== 0) {
      productParams = {
        method: "GET",
        url: `/shop/newproduct/${params.id.id}?languageCode=${params.id.lang}&countryCode=${params.id.countryCode}`,
        requestBody: null
      };
      receivedProducts = yield Api.apiCall(productParams);
    }

    if (receivedProducts.status === "SUCCESS" || receivedProducts.status === "00") {
      yield put({ type: PRODUCTBYIDDATA.SUCCESS, receivedProducts: receivedProducts }); // dispatch FETCH_SUCCEEDED action

      yield put({ type: 'FETCH_PRODUCT_BY_CATEGORY', category: receivedProducts.data.category[0] })
    } else {
      yield put({ type: PRODUCTBYIDDATA.ERROR, error: receivedProducts.data });
    }

  } catch (error) {
    yield put({ type: PRODUCTBYIDDATA.ERROR, error: error });
  }
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: false,
  });
}

export function* watchfetchProductById() {
  yield takeLatest(PRODUCTBYIDDATA.LOAD, fetchProductById); //always fetch latest list
}
