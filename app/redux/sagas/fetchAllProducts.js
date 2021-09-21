import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./api";

function* fetchAllProduct(params) {
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: true,
  });
  try {
    let lang = localStorage.getItem('selectedLangCode');
    let categoryParams = {
      method: "GET",
      // url: "/shop/category?recordPerPage=1000&page=1&languageCode=" + lang,
      url: "/shop/newcategory?recordPerPage=1000&page=1&sortByOrder=true",
      requestBody: null
    };

    let productParams = {
      method: params.params.method,
      url: params.params.url,
      // url: params.params.url + "&languageCode=" + lang,
      requestBody: params.params.requestBody
    }

    const receivedProductCategories = yield Api.apiCall(categoryParams);
    // receivedProductCategories.data=["SMARTSKIN","SMARTKIT","ACCESSORIES"];
    receivedProductCategories.data = receivedProductCategories.data.map((item) => item.name);

    if (receivedProductCategories.status === "00") {
      const receivedProducts = yield Api.apiCall(productParams);
      yield put({ type: "FETCH_PRODUCT_CATEGORIES_SUCCEEDED", receivedProductCategories: receivedProductCategories });

      if (receivedProducts.status === "SUCCESS" || receivedProducts.status === "00") {
        yield put({ type: "FETCH_ALL_PRODUCT_SUCCEEDED", receivedProducts: receivedProducts });
        yield put({ type: "SET_LOADER_STATUS", loaderStatus: false, });

        //check for products are available or not 
        if (receivedProducts.data.length > 0) {
          yield put({ type: "NOTIFY_ME", notifyme: false })
        }
        else {
          yield put({ type: "NOTIFY_ME", notifyme: true })
        }

      } else {
        yield put({ type: "FETCH_ALL_PRODUCT_FAILED", error: receivedProducts.error });
      }
    } else {
      yield put({ type: "FETCH_PRODUCT_CATEGORIES_FAILED", error: receivedProductCategories.error });
    }
  } catch (error) {
    yield put({ type: "FETCH_ALL_PRODUCT_FAILED", error });
  }
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: false,
  });
}

export function* watchfetchAllProduct() {
  yield takeLatest("FETCH_ALL_PRODUCT", fetchAllProduct); //always fetch latest list
}
