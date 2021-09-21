import { GEOLOCATION } from "../constants";

const geoLocationReducer = (geoLocationData = { geoLocationData: {}, error: "" }, action) => {
	switch (action.type) {
		case GEOLOCATION.LOAD:
			return { ...geoLocationData, loading: true };
		case GEOLOCATION.SUCCESS:
			return { geoLocationData: action.geoLocationData.data, error: "", loading: false };
		case GEOLOCATION.ERROR:
			return { geoLocationData: [], error: action.error, loading: false };
		default:
			return geoLocationData; //state does not change
	}
};

export default geoLocationReducer;
