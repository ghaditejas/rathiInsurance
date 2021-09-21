import { put, takeEvery, call } from "redux-saga/effects";
import { Api } from "./api";

function* addItemCart(params) {
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: true,
  });
  if (localStorage.getItem("Token")) {
    const userDetails = JSON.parse(localStorage.getItem("User"));
    const addItemParams = {
      method: "POST",
      url: "/shop/newcart",
      requestBody: {
        userId: userDetails.uuid,
        userEmail: userDetails.email,
        productId: parseInt(params.params.productId),
        productCount: parseInt(params.params.productCount),
        currencyCode: params.params.currencyCode,
        countryCode: params.params.countryCode,
        languageCode: params.params.languageCode,
        vendorId: params.params.vendorId,
      },
    };
    console.log('data....',addItemParams);
    try {
      const itemAdd = yield Api.apiCall(addItemParams);
      // console.log('itemAdd==>', itemAdd)
      if (itemAdd.status === "SUCCESS" || itemAdd.status === "00") {
        yield put({
          type: "ADD_ITEM_CART_SUCCEEDED",
          itemAdd: params.params,
        });
        yield call(addtolocal, params.params);
        // dispatch FETCH_SUCCEEDED action
      } else {
        yield put({
          type: "ADD_ITEM_CART_FAILED",
          error: itemAdd.error,
        });
      }
    } catch (error) {
      yield put({
        type: "ADD_ITEM_CART_FAILED",
        itemAdd: [],
      });
      // yield put({ type: "ADD_ITEM_CART_FAILED", error });
    }
  } else {
    yield call(addtolocal, params.params);
    yield put({
      type: "ADD_ITEM_CART_SUCCEEDED",
      itemAdd: params.params,
    });
  }
  // params.params.cartChange && params.params.cartChange();
  params.params.cartChange.cartCount
    ? params.params.cartChange.cartCount()
    : params.params.cartChange();
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: false,
  });
}

function addtolocal(product) {
  // console.log('addcart')
  let cartItem = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  if (cartItem[product.productId]) {
    cartItem[product.productId]["productCount"] =
      parseInt(cartItem[product.productId]["productCount"]) + 1;
  } else {
    cartItem = { ...cartItem, [product.productId]: product };
  }
  // console.log(cartItem);
  localStorage.setItem("cart", JSON.stringify(cartItem));
  product.cartChange.setCart &&
    product.cartChange.setCart(JSON.parse(localStorage.getItem("cart")));
}

export function* watchAddItemCart() {
  yield takeEvery("ADD_ITEM_CART", addItemCart); //always fetch latest list
}
