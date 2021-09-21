import { GETORDERHISTORY } from "../constants";

const getOrderHistoryReducer = (orderHistoryData = { orderHistoryData: [], error: "" }, action) => {
	switch (action.type) {
		case GETORDERHISTORY.LOAD:
			return { ...orderHistoryData, loading: true };
		case GETORDERHISTORY.SUCCESS:
			return { orderHistoryData: action.orderHistoryData.data.data, error: "", loading: false };
		case GETORDERHISTORY.ERROR:
			return { orderHistoryData: [], error: action.error, loading: false };
		default:
			return orderHistoryData; //state does not change
	}
};

export default getOrderHistoryReducer;
