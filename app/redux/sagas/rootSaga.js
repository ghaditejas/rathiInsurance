import { call, all, fork } from "redux-saga/effects";
// 'call' effect run a saga with params
import { watchReset } from "./resetPassword";
import { watchContact } from "./contactUs";
import { watchVerify } from "./verifyuser";
import { watchSearchProduct } from "./searchproduct";
import { watchfetchAllProduct } from "./fetchAllProducts";
import { watchfetchProductById } from "./fetchProductById";
import { watchGeoLocation } from "./geoLocation";
import { watchAddItemCart } from "./addItemCart";
import { watchRemoveItemCart } from "./removeItemCart";
import { watchLogin } from "./login";
import { watchSignup } from "./signup";
import { watchHomePage } from "./homePage";
import { watchfetchAddress } from "./fetchAddress";
import { watchAddAddress } from "./addAddress";
import { watchRequestRefund } from "./requestRefund"
import { watchGetCart } from "./getCartItem";
import { watchDeleteAddress } from './deleteAddress'
import { watchCreateOrderSaga } from './createOrderSaga'
import { watchGetClientSecretSaga } from "./getClientSecretSaga";
import { watchForgotPassword } from './forgotPassword'
import { watchGetOrderHistorySaga } from "./getOrderHistorySaga";
import { watchGetSingleOrderDetailsSaga } from "./getSingleOrderDetailsSaga";
import { watchNotifyMeEmail } from './notifyEmail';
import { watchfetchProductByCategory } from "./fetchProductByCategory";
import { watchWarrantyActivate } from './warrantyActivation'
import { warrantyActivationValidate } from "../../components/HookValidation/FormValidationRules";


export default function* rootSaga() {
  yield all([
    fork(watchReset),
    fork(watchVerify),
    fork(watchContact),
    fork(watchfetchAllProduct),
    fork(watchfetchProductById),
    fork(watchGeoLocation),
    fork(watchAddItemCart),
    fork(watchRemoveItemCart),
    fork(watchSearchProduct),
    fork(watchLogin),
    fork(watchSignup),
    fork(watchHomePage),
    fork(watchfetchAddress),
    fork(watchAddAddress),
    fork(watchGetCart),
    fork(watchDeleteAddress),
    fork(watchCreateOrderSaga),
    fork(watchGetClientSecretSaga),
    fork(watchGetOrderHistorySaga),
    fork(watchDeleteAddress),
    fork(watchForgotPassword),
    fork(watchGetSingleOrderDetailsSaga),
    fork(watchRequestRefund),
    fork(watchNotifyMeEmail),
    fork(watchfetchProductByCategory),
    fork(watchWarrantyActivate)
  ]);
}
