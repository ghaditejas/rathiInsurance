import { CREATEORDER } from "../constants";

const createOrder = (url, createOrderData, method) => ({
	type: CREATEORDER.LOAD,
	url,
	createOrderData,
	method
});

const createOrderSuccess = (orderData) => ({
	type: CREATEORDER.SUCCESS,
	orderData,
});

const createOrderFailed = (error) => ({
	type: CREATEORDER.ERROR,
	error,
});

export { createOrder, createOrderSuccess, createOrderFailed };
