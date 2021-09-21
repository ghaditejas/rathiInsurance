import axios from "axios";
import { API_HOST } from "../../lib/constants/assets";
import { put, takeLatest } from "redux-saga/effects";
import { GETCLIENTSECRET } from "../constants";

function* getClientSecretSaga(params) {
	// console.log("function*getClientSecretSaga -> params", params);
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

			const getClientSecretData = yield axios.post(path, params.data, requestOptions);
			// console.log("function*getClientSecretSaga -> getClientSecretData", getClientSecretData)

			if (getClientSecretData.data.status === "SUCCESS" || getClientSecretData.data.status === "00") {
				yield put({ type: GETCLIENTSECRET.SUCCESS, clientSecretData: getClientSecretData });
			} else {
				yield put({ type: GETCLIENTSECRET.ERROR, error: getClientSecretData.data });
			}
		}
	} catch (error) {
		yield put({ type: GETCLIENTSECRET.ERROR, error: error });
	}
}

export function* watchGetClientSecretSaga() {
	yield takeLatest(GETCLIENTSECRET.LOAD, getClientSecretSaga); //always fetch latest list
}
