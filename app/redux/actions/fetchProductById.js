import { PRODUCTBYIDDATA } from "../constants";


const fetchProductById = (id) => ({
	type: PRODUCTBYIDDATA.LOAD,
	id
});

const fetchProductByIdSuccess = (receivedProducts) => ({
	type: PRODUCTBYIDDATA.SUCCESS,
	receivedProducts,
});

const fetchProductByIdFailed = (error) => ({
	type: PRODUCTBYIDDATA.ERROR,
	error,
});

export { fetchProductById, fetchProductByIdSuccess, fetchProductByIdFailed };
