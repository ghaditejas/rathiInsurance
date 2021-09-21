import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import getSymbolFromCurrency from "../../lib/currency-symbol-map";
import { Assets } from "../../lib/constants/assets";

import "./orderHistory.scss";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const OrderHistoryCard = ({ histData, orderData, trans, orderClick = null, ...props }) => {
  const [data, setData] = useState(null);
  const [orderStatus, setOrderStatus] = useState('')
  const prevOrderData = usePrevious(orderData);

  // const [currency, setCurrency] = useState(null);

  useEffect(() => {
    if (histData && Object.keys(histData).length !== 0) {
      orderData = histData;
      setOrderStatusClass(orderData)
      setData(orderData);
      setOrderStatus(orderData.orderStatus.replace(/([A-Z]+)/g, " $1"))
    }
  }, [histData && histData.orderId && histData.orderId])

  useEffect(() => {
    if (orderData && Object.keys(orderData).length !== 0) {
      histData = orderData;
      setOrderStatusClass(histData)
      setData(histData);
      setOrderStatus(histData.orderStatus.replace(/([A-Z]+)/g, " $1"));
    }

  }, [orderData && orderData.orderId && orderData.orderId])

  useEffect(() => {
    if (orderData && prevOrderData && prevOrderData.orderStatus !== orderData.orderStatus) {
      setOrderStatus(orderData.orderStatus.replace(/([A-Z]+)/g, " $1"))
    }
  })

  const setOrderStatusClass = (data) => {
    switch (data.orderStatus.toLowerCase()) {
      case 'pending':
        data.orderStatusClass = 'badge-warning'
        break;
      case 'paid':
      case 'shipped':
        data.orderStatusClass = "badge-primary"
        break;
      case 'cancelled':
      case 'refundrequested':
      case 'refunded':
        data.orderStatusClass = "badge-danger"
        break;
      case 'completed':
        data.orderStatusClass = "badge-success"
        break;
      default:
        data.orderStatusClass = "badge-secondary"
    }
  }
  // useEffect(() => {
  //   if (props.currency && Object.keys(props.currency).length !== 0) {
  //     setCurrency(props.currency);
  //   }
  // }, [props.currency.country])

  return (
    <div className="order-history-main">
      <Row>
        <Col onClick={orderClick} className={`order-details col ${orderClick && "hover-card"}`} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col className="product-info col" xl={5} lg={5} md={5} sm={5} xs={12}>
              <Row>
                <Col className="padding-right col" xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="order-date d-flex justify-content-between">
                    <span className="text-upper-case">{trans("order_date")}: {data && new Date(data.orderCreatedDate).toLocaleDateString()}</span>
                    <span>
                      <span className={`badge ${data && data.orderStatusClass}`}>
                        {(orderStatus) || "Ordered"}
                      </span>
                    </span>
                  </div>
                  <div className="order-number text-upper-case">
                    <span className="text-upper-case">{trans("order_no")} </span><span> {data && data.orderId || "--"}</span>
                  </div>
                  <div className="order-name-qty">
                    <span className="text-upper-case product-name">
                      {data && data.ShippingAddress && data.ShippingAddress.name && data.ShippingAddress.name || "-"}
                      <span className="seperator"></span>
                    </span>
                    <span>{trans("quantity_short")}<span>{data && data.totalQuantityOrdered || 'NA'}</span></span>
                  </div>
                  <div className="order-price">
                    <span>
                      {(data && data.currencyCode) ? getSymbolFromCurrency(data.currencyCode) : "$"} {data && data.grandTotal && (data.grandTotal).toFixed(2) || "--"}</span>
                  </div>
                  <div className="order-status-date">
                    <span className="text-capitalize status">{trans("delivery_date")}: </span><span>{data && data.expectedDeliveryDate ? new Date(data.expectedDeliveryDate).toLocaleDateString() : 'NA'}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="user-info col" xl={7} lg={7} md={7} sm={7} xs={12}>
              <Row>
                <Col className="col payment-method" xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="text-capitalize text-grey-heading">{trans("payments_method")}</div>
                  <div className="icon-div"> <span className="icon"> <img src={Assets.PaymentCard} /></span><span className="text-bold-black">Card</span></div>
                </Col>
                <Col className="col padding-left payment-contact" xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="text-capitalize text-grey-heading">{trans("contact_details")}</div>
                  <div className="text-bold-black icon-div">
                    <span className="icon">
                      <img src={Assets.UserCall} />
                    </span>
                    {data && data.ShippingAddress && data.ShippingAddress.mobileNumber && data.ShippingAddress.mobileNumber || "Not Found"}
                  </div>
                </Col>
                <Col className="col payment-address" xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="text-capitalize text-grey-heading">{trans("address")}</div>
                  <div className="text-upper-case text-bold-black icon-div">
                    <span className="icon">
                      <img src={Assets.UserAddress} />
                    </span>
                    {`${data && data.ShippingAddress && data.ShippingAddress.houseNumber && data.ShippingAddress.houseNumber || ""}, 
                    ${data && data.ShippingAddress && data.ShippingAddress.landmarK && data.ShippingAddress.landmarK || ""}, 
                    ${data && data.ShippingAddress && data.ShippingAddress.city && data.ShippingAddress.city || ""}, 
                    ${data && data.ShippingAddress && data.ShippingAddress.country && data.ShippingAddress.country || ""} - 
                    ${data && data.ShippingAddress && data.ShippingAddress.pinCode && data.ShippingAddress.pinCode || ""}`}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
};

const NoOrderView = ({ trans, error = null }) => {
  return (
    <div className="no-orders">
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <h2>{error || trans("no_orders")}</h2>
        <Link to='/products' className="btn btn-primary go-to-store-btn">
          {trans('goto_store_btn')}
        </Link>
      </Col>
    </div>
  );
}

export { OrderHistoryCard, NoOrderView };