import { CREATEORDER } from "../constants";

const createOrderReducer = (orderData = { orderData: [], error: "" }, action) => {
	switch (action.type) {
		case CREATEORDER.LOAD:
			return { ...orderData, loading: true };
		case CREATEORDER.SUCCESS:
			return { orderData: action.orderData.data.data, error: "", loading: false };
		case CREATEORDER.ERROR:
			return { orderData: [], error: action.error, loading: false };
		default:
			return orderData; //state does not change
	}
};

export default createOrderReducer;
