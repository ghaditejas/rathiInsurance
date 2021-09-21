import { GEOLOCATION } from "../constants";


const geoLocation = () => ({
	type: GEOLOCATION.LOAD,
});

const geoLocationSuccess = (receivedProducts) => ({
	type: GEOLOCATION.SUCCESS,
	receivedProducts,
});

const geoLocationFailed = (error) => ({
	type: GEOLOCATION.ERROR,
	error,
});

export { geoLocation, geoLocationSuccess, geoLocationFailed };
