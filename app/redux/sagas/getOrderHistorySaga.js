import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";
import { put, takeLatest } from "redux-saga/effects";
import { GETORDERHISTORY } from "../constants";

function* getOrderHistorySaga(params) {

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

			const getOrderHistoryData = yield axios.get(path, requestOptions);

			if (getOrderHistoryData.data.status === "SUCCESS" || getOrderHistoryData.data.status === "00") {
				yield put({ type: GETORDERHISTORY.SUCCESS, orderHistoryData: getOrderHistoryData });
			} else {
				yield put({ type: GETORDERHISTORY.ERROR, error: getOrderHistoryData.data });
			}
		}

	} catch (error) {
		yield put({ type: GETORDERHISTORY.ERROR, error: error });
	}

	yield put({ type: "SET_LOADER_STATUS", loaderStatus: false });
}

export function* watchGetOrderHistorySaga() {
	yield takeLatest(GETORDERHISTORY.LOAD, getOrderHistorySaga); //always fetch latest list
}
