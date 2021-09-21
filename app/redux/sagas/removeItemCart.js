import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";

function* removeItemCart(params) {
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: true,
  });
  const removeItemParams = {
    method: "DELETE",
    url: "/shop/newcart",
    requestBody: {
      clearAll: params.params.clearAll,
      userId: params.params.userId,
      productId: params.params.productId,
      productCount: params.params.productCount,
      languageCode: params.params.languageCode,
      countryCode: params.params.countryCode,
      vendorID: params.params.vendorId,
      currencyCode: params.params.currencyCode,
    },
  };

  let setCartChange = params.params.cartChange;
  if (localStorage.getItem("Token")) {
    const userDetails = JSON.parse(localStorage.getItem("User"));
    removeItemParams.requestBody.userId = userDetails.uuid;
    delete params.params["cartChange"];
    try {
      const removeCart = yield Api.apiCall(removeItemParams);
      console.log("remove cart==>", removeCart);
      if (removeCart.status === "SUCCESS" || removeCart.status === "00") {
        yield put({
          type: "REMOVE_ITEM_CART_SUCCEEDED",
          removeCart: [],
        });
        yield call(removeFromLocal, {
          product: params.params,
          setCartChange: setCartChange,
        });
        // dispatch FETCH_SUCCEEDED action
      } else {
        yield put({
          type: "REMOVE_ITEM_CART_FAILED",
          error: removeCart.error,
        });
      }
    } catch (error) {
      yield put({
        type: "REMOVE_ITEM_CART_FAILED",
        error,
      });
    }
  } else {
    yield call(removeFromLocal, {
      product: params.params,
      setCartChange: setCartChange,
    });
    yield put({
      type: "REMOVE_ITEM_CART_SUCCEEDED",
      removeCart: [],
    });
  }
  setCartChange.cartCount();
  yield put({
    type: "SET_LOADER_STATUS",
    loaderStatus: false,
  });
}

function removeFromLocal(cart) {
  let cartItem = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  if (cart.product.clearAll) {
    localStorage.setItem("cart", JSON.stringify({}));
    cart.setCartChange.setCart(JSON.parse(localStorage.getItem("cart")));
  } else {
    if (
      cart.product.productCount ==
      cartItem[cart.product.productId]["productCount"]
    ) {
      delete cartItem[cart.product.productId];
    } else {
      cartItem[cart.product.productId]["productCount"] =
        parseInt(cartItem[cart.product.productId]["productCount"]) - 1;
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
    cart.setCartChange.setCart(JSON.parse(localStorage.getItem("cart")));
  }
}

export function* watchRemoveItemCart() {
  yield takeLatest("REMOVE_ITEM_CART", removeItemCart); //always fetch latest list
}
