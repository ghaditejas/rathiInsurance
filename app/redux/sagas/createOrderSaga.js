import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";
import { put, takeLatest } from "redux-saga/effects";
import { CREATEORDER } from "../constants";
import Cookies from 'universal-cookie';

function* createOrderSaga(params) {
	console.log("createOrderSaga==>", params);
	try {
		const cookies = new Cookies();
		const path = `${API_HOST}${params.url}`;
		const token = JSON.parse(localStorage.getItem("Token"));
		let affiliateCode = cookies.get('AffiliateCode')
		// console.log("affiliateCode==>", affiliateCode);
		if (affiliateCode !== undefined) {
			// console.log('inside this if===>')
			params.createOrderData.referralCode = affiliateCode
		}

		// console.log('params.createOrderData==>', params.createOrderData)

		if (token) {
			const requestOptions = {
				headers: {
					"Authorization": `Bearer ${token}`,
					"Content-Type": "application/json"
				}
			};

			const orderData = yield axios.post(path, params.createOrderData, requestOptions);
			// console.log("function*createOrderSaga -> orderData", orderData)

			if (orderData.data.status === "SUCCESS" || orderData.data.status === "00" || "01") {
				localStorage.setItem("orderData", JSON.stringify(orderData.data.data));
				yield put({ type: CREATEORDER.SUCCESS, orderData: orderData });
				localStorage.setItem("cart", JSON.stringify({}));
				params.method.changeScreenNumber(2);
				params.method.cartChange();
			} else {
				yield put({ type: CREATEORDER.ERROR, error: orderData.data });
			}
		}
	} catch (error) {
		yield put({ type: CREATEORDER.ERROR, error: error });
	}
}

export function* watchCreateOrderSaga() {
	yield takeLatest(CREATEORDER.LOAD, createOrderSaga); //always fetch latest list
}
