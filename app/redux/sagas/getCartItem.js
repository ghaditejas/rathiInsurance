import { put, takeLatest, call } from "redux-saga/effects";
import { Api } from "./api";
import i18n from "../../config/i18n_config";

function* getCartItem(params) {
  let localcartItem = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

  let userInfo = JSON.parse(localStorage.getItem("User"));
  let isLoggedIn = !(userInfo == null || userInfo == {});
  let syncCartAPIResponse = {};
  try {
    let cartData = {
      userId: userInfo.uuid,
      userEmail: userInfo.email,
      languageCode: "en",
      cartItem: [],
    };

    const getCartItemParams = {
      method: "GET",
      url: "/shop/newcart/" + userInfo.uuid,
      requestBody: null,
    };

    if (Object.keys(localcartItem)) {
      Object.entries(localcartItem).map((item, index) => {
        let cart_entry = {
          productId: parseInt(item[1]["productId"]),
          productCount: parseInt(item[1]["productCount"]),
          shippingMethod: "All Together",
          currencyCode: item[1]["currencyCode"],
          countryCode: item[1]["countryCode"],
          languageCode: item[1]["languageCode"],
          vendorId: item[1]["vendorId"],
        };
        cartData.cartItem.push(cart_entry);
      });
    }
    const apiData = {
      url: "/shop/newcart/multiple-cartitem",
      requestBody: cartData,
      method: "POST",
    };
    if (isLoggedIn && cartData.cartItem.length) {
      if (!params.params.onlySync)
        syncCartAPIResponse = yield Api.apiCall(apiData);
      else
        syncCartAPIResponse = {
          status: "00",
        };
    } else {
      syncCartAPIResponse = {
        status: "00",
      };
    }
    if (isLoggedIn && syncCartAPIResponse.status === "00") {
      localStorage.setItem("cart", JSON.stringify({}));
      const cartItem = yield Api.apiCall(getCartItemParams);
      if (cartItem.status === "SUCCESS" || cartItem.status === "00") {
        console.log("GET_CART_ITEM_SUCCEEDED", cartItem);
        yield put({
          type: "GET_CART_ITEM_SUCCEEDED",
          cartItem: cartItem,
        });
        yield call(syncCart, cartItem);
      } else {
        yield put({
          type: "GET_CART_ITEM_FAILED",
          error: cartItem.error,
        });
      }
    } else {
      yield put({ type: "GET_CART_ITEM_FAILED", error: "Sync Failed" });
    }
  } catch (error) {
    // console.log(error);
    yield put({ type: "GET_CART_ITEM_FAILED", error });
  }
  yield put({
    type: "SYNCED_SUCCEEDED",
    message: "Successfully Synced",
  });
}

function syncCart(cartUpdate) {
  let cartItem = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

  cartUpdate &&
    cartUpdate.data &&
    cartUpdate.data.cartItem &&
    cartUpdate.data.cartItem.map((item, index) => {
      cartItem = {
        ...cartItem,
        [item.productId]: {
          product_name: item.productName,
          product_image: item.image.featuredImage["thumb"]["imagePath"],
          product_price: item.price,
          productCount: item.quantity,
          productId: item.productId,
          slug: item.productSlug,
          vendorId: item.vendorId,
          languageCode: i18n.lamguage,
          countryCode: item.countryCode,
          currencyCode: item.currencyCode,
        },
      };
    });
  localStorage.setItem("cart", JSON.stringify(cartItem));
}

export function* watchGetCart() {
  yield takeLatest("GET_CART_ITEM", getCartItem); //always fetch latest list
}
