
import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";
import { put, takeLatest } from "redux-saga/effects";
import { GETSINGLEORDERDETAILS } from "../constants";

function* getSingleOrderDetailsSaga(params) {

  yield put({ type: "SET_LOADER_STATUS", loaderStatus: true });

  try {
    const path = `${API_HOST}${params.url}`;
    const token = JSON.parse(localStorage.getItem("Token"));

    if (token) {
      const requestOptions = {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };

      const singleOrderDetailsData = yield axios.get(path, requestOptions);
      // console.log("function*getSingleOrderDetailsSaga -> singleOrderDetailsData", singleOrderDetailsData)

      if (singleOrderDetailsData.data.status === "SUCCESS" || singleOrderDetailsData.data.status === "00") {
        setOrderIsRefundable(singleOrderDetailsData.data.data);
        yield put({ type: GETSINGLEORDERDETAILS.SUCCESS, singleOrderData: singleOrderDetailsData });
      } else {
        yield put({ type: GETSINGLEORDERDETAILS.ERROR, error: singleOrderDetailsData.data });
      }
    }

  } catch (error) {
    yield put({ type: GETSINGLEORDERDETAILS.ERROR, error: error });
  }
  yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });

}

const setOrderIsRefundable = (data) => {
  switch (data.orderStatus.toLowerCase()) {
    case 'pending':
    case 'paid':
    case 'shipped':
    case 'completed':
      data.isRefundable = true
      break;
    case 'cancelled':
    case 'refundrequested':
    case 'refunded':
      data.isRefundable = false
      break;
    default:
      data.isRefundable = false
  }
}

export function* watchGetSingleOrderDetailsSaga() {
  yield takeLatest(GETSINGLEORDERDETAILS.LOAD, getSingleOrderDetailsSaga); //always fetch latest list
}
