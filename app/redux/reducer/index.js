import { combineReducers } from "redux";
import ContactUsReducer from "./ContactUsReducer";
import VerifyUserReducer from "./VerifyUserReducer";

import ResetPasswordReducer from "./ResetPasswordReducer";
import SearchProductReducer from "./SearchProductReducer";
import fetchAllProductReducers from "./fetchAllProducts";
import fetchProductByIdReducer from "./FetchProductByIdReducer";
import geoLocationReducer from "./GeoLocationReducer";
import addItemCart from "./AddItemCartReducer";
import removeItemCart from "./RemoveItemCartReducer";
import loginReducers from "./LoginReducer";
import signUpReducer from "./SignupReducer";
import HomePageReducer from './HomePageReducer';
import fetchProductCategoriesReducers from "./fetchProductCategories";
import fetchAddressReducers from "./fetchAddress";
import addAddressReducers from "./addAddress";
import GetCartItem from './GetCartItem';
import deleteAddressReducers from './deleteAddress'
import createOrderReducer from "./CreateOrderReducer";
import getClientSecretReducer from "./GetClientSecretReducer";
import forgotPasswordReducers from './forgotPassword';
import getOrderHistoryReducer from "./GetOrderHistoryReducer";
import getSingleOrderDetailsReducer from "./GetSingleOrderDetailsReducer";
import countryCurrency from './CountryCurrency';
import setLoader from './SetLoader';
import notifyMeReducers from './notifyMe'
import notifyEmailReducers from './notifyEmail';
import fetchProductByCategoryReducer from './FetchProductByCategoryReducer'
import requestRefundReducers from './requestRefundReducer'
import warrantyActivationReducers from './warrantyActivation'


const rootReducer = combineReducers({
  ContactUsReducer,
  ResetPasswordReducer,
  VerifyUserReducer,
  fetchAllProductReducers,
  fetchProductByIdReducer,
  geoLocationReducer,
  addItemCart,
  removeItemCart,
  SearchProductReducer,
  loginReducers,
  signUpReducer,
  HomePageReducer,
  fetchProductCategoriesReducers,
  fetchAddressReducers,
  addAddressReducers,
  GetCartItem,
  deleteAddressReducers,
  createOrderReducer,
  getClientSecretReducer,
  getOrderHistoryReducer,
  deleteAddressReducers,
  forgotPasswordReducers,
  getSingleOrderDetailsReducer,
  countryCurrency,
  setLoader,
  requestRefundReducers,
  forgotPasswordReducers,
  notifyMeReducers,
  notifyEmailReducers,
  fetchProductByCategoryReducer,
  warrantyActivationReducers
});
export default rootReducer;
