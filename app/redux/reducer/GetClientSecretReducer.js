import { GETCLIENTSECRET } from "../constants";

const getClientSecretReducer = (clientSecretData = { clientSecretData: [], error: "" }, action) => {
	switch (action.type) {
		case GETCLIENTSECRET.LOAD:
			return { ...clientSecretData, loading: true };
		case GETCLIENTSECRET.SUCCESS:
			return { clientSecretData: action.clientSecretData.data.data, error: "", loading: false };
		case GETCLIENTSECRET.ERROR:
			return { clientSecretData: [], error: action.error, loading: false };
		default:
			return clientSecretData; //state does not change
	}
};

export default getClientSecretReducer;
