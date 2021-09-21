import { GETSINGLEORDERDETAILS } from "../constants";

const getSingleOrderDetails = (url) => ({
	type: GETSINGLEORDERDETAILS.LOAD,
	url
});

const getSingleOrderDetailsSuccess = (clientSecretData) => ({
	type: GETSINGLEORDERDETAILS.SUCCESS,
	clientSecretData,
});

const getSingleOrderDetailsFailed = (error) => ({
	type: GETSINGLEORDERDETAILS.ERROR,
	error,
});

export { getSingleOrderDetails, getSingleOrderDetailsSuccess, getSingleOrderDetailsFailed };