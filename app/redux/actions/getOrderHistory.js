import { GETORDERHISTORY } from "../constants";

const getOrderHistory = (url) => ({
	type: GETORDERHISTORY.LOAD,
	url
});

const getOrderHistorySuccess = (clientSecretData) => ({
	type: GETORDERHISTORY.SUCCESS,
	clientSecretData,
});

const getOrderHistoryFailed = (error) => ({
	type: GETORDERHISTORY.ERROR,
	error,
});

export { getOrderHistory, getOrderHistorySuccess, getOrderHistoryFailed };
