const requestRefundReducers = (requestRefund = { requestRefundStatus: {}, error: "", message: '' }, action) => {
  switch (action.type) {
    case "REQUEST_REFUND":
      return { ...requestRefund };
    case "REQUEST_REFUND_SUCCEEDED":
      return {
        requestRefundStatus: action.requestRefunded,
        message: action.requestRefunded.message
      };
    case "REQUEST_REFUND_FAILED":
      return { requestRefund: [], error: action.error, message: action.error };
    case "REQUEST_REFUND_RESET":
      return { requestRefund: [], error: "", message: "" };
    default:
      return requestRefund; //state does not change
  }
};

export default requestRefundReducers;
