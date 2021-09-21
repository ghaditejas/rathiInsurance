import { GETCLIENTSECRET } from "../constants";

const getClientSecret = (url, data) => ({
	type: GETCLIENTSECRET.LOAD,
	url,
	data
});

const getClientSecretSuccess = (clientSecretData) => ({
	type: GETCLIENTSECRET.SUCCESS,
	clientSecretData,
});

const getClientSecretFailed = (error) => ({
	type: GETCLIENTSECRET.ERROR,
	error,
});

export { getClientSecret, getClientSecretSuccess, getClientSecretFailed };
