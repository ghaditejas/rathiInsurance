import { GETSINGLEORDERDETAILS } from "../constants";

const getSingleOrderDetailsReducer = (singleOrderData = { singleOrderData: [], error: "" }, action) => {
	switch (action.type) {
		case GETSINGLEORDERDETAILS.LOAD:
			return { ...singleOrderData, loading: true };
		case GETSINGLEORDERDETAILS.SUCCESS:
			return { singleOrderData: action.singleOrderData.data.data, error: "", loading: false };
		case GETSINGLEORDERDETAILS.ERROR:
			return { singleOrderData: [], error: action.error, loading: false };
		default:
			return singleOrderData; //state does not change
	}
};

export default getSingleOrderDetailsReducer;