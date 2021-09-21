import { PRODUCTBYIDDATA } from "../constants";

const fetchProductByIdReducer = (productsData = { productsData: {}, error: "" }, action) => {
	switch (action.type) {
		case PRODUCTBYIDDATA.LOAD:
			return { ...productsData, loading: true };
		case PRODUCTBYIDDATA.SUCCESS:
			return { productsData: action.receivedProducts.data, error: "", loading: false };
		case PRODUCTBYIDDATA.ERROR:
			return { productsData: {}, error: action.error, loading: false };
		default:
			return productsData; //state does not change
	}
};

export default fetchProductByIdReducer;
