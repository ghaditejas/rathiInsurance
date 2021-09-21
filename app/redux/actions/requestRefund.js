const requestRefund = (params, method) => ({
    type: "REQUEST_REFUND",
    params,
    method
  });
  
  const requestRefundSucceeded = (requestRefunded) => ({
    type: "REQUEST_REFUND_SUCCEEDED",
    requestRefunded,
  });
  
  const requestRefundFailed = (error) => ({
    type: "REQUEST_REFUND_FAILED",
    error,
  });
  
  const resetRefundMessage = () => ({
    type: "REQUEST_REFUND_RESET",
  })
  export { requestRefund, requestRefundSucceeded, requestRefundFailed,resetRefundMessage };
  