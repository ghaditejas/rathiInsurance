import { put, takeLatest } from "redux-saga/effects";
import { GEOLOCATION } from "../constants";
import { Api } from "./api";

import { country } from '../../../currency';

function* geoLocation() {
	try {
		const geoLocationParams = {
			method: "POST",
			url: "/locate",
			requestBody: null
		}

		const geoLocationData = yield Api.apiCall(geoLocationParams);
		if (geoLocationData.status === "SUCCESS" || geoLocationData.status === "00") {
			// geoLocationData.data.countryCode = "DEU";
			localStorage.setItem("countryCode", geoLocationData.data.countryCode);
			yield put({ type: GEOLOCATION.SUCCESS, geoLocationData: geoLocationData }); // dispatch FETCH_SUCCEEDED action
			// get country currency and conversion api call 
			// const geoLocationData = yield Api.apiCall(geoLocationParams);
			// let currency = country[0][geoLocationData.data.countryCode] || country[0]['DEU'];
			// yield put({ type: 'CURRENCY_CONVERSION', countryCurrency: currency })
		} else {
			yield put({ type: GEOLOCATION.ERROR, error: geoLocationData });
		}

	} catch (error) {
		console.log('here', error);
		yield put({ type: GEOLOCATION.ERROR, error: error });
	}
}

export function* watchGeoLocation() {
	yield takeLatest(GEOLOCATION.LOAD, geoLocation); //always fetch latest list
}
