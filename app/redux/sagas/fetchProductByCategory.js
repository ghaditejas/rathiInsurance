import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./api";

function* fetchProductByCategory(params) {
  //   console.log('fetchProductByCategory ====>', params)
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: true,
  });
  try {
    let lang = localStorage.getItem('selectedLangCode');
    let productByCategoryParams = {
      method: "POST",
      url: "/shop/newproduct",
      requestBody: {
        category: params.category,
        page: 1,
        recordPerPage: 5,
        languageCode: lang
      }
    };

    const receivedProductByCategories = yield Api.apiCall(productByCategoryParams);
    console.log("receivedProductByCategories==>", receivedProductByCategories);

    if (receivedProductByCategories.status === "00") {
      yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });

      yield put({ type: "FETCH_PRODUCT_BY_CATEGORY_SUCCEEDED", receivedProducts: receivedProductByCategories });
    } else {
      yield put({ type: "FETCH_PRODUCT_CATEGORIES_FAILED", error: receivedProductByCategories.error });
    }
  } catch (error) {
    yield put({ type: "FETCH_PRODUCT_BY_CATEGORY_FAILED", error });
  }
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: false,
  });
}

export function* watchfetchProductByCategory() {
  yield takeLatest("FETCH_PRODUCT_BY_CATEGORY", fetchProductByCategory); //always fetch latest list
}
