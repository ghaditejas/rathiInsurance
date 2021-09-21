import React from "react";
import { Row, Col } from "react-bootstrap";
// import { connect } from 'react-redux';
import getSymbolFromCurrency from "../../lib/currency-symbol-map";
import "./ThankYou.scss";

const ThankYouDetailCard = ({ orderData, item, trans }) => {
  return (
    <Row className="common-margin-top product-details">
      <Col xl={3} lg={3} md={3} sm={4} xs={4} className="col">
        <div className="vertical-center img-container">
          <img
            src={(item.productImages.featuredImage.original.imagePath) || ""}
            className="product-image-cart"
          />
        </div>
      </Col>
      <Col xl={9} lg={9} md={9} sm={8} xs={8} className="col info">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col info-padding-top">
            <span>{trans("name")}</span><span>{item.productName}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col info-padding-top">
            <span>{trans("status")}</span><span>{orderData.orderStatus}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col info-padding-top">
            <span>{trans("quantity")}</span><span>{item.productQuantity}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col info-padding-top">
            <span>date: </span><span>{new Date(orderData.orderCreatedDate).toLocaleDateString()}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col info-padding-top">
            <span>{trans("addr")} </span>
            <span>
              {`${orderData && orderData.ShippingAddress && orderData.ShippingAddress.houseNumber && orderData.ShippingAddress.houseNumber || ""}, 
              ${orderData && orderData.ShippingAddress && orderData.ShippingAddress.landmarK && orderData.ShippingAddress.landmarK || ""}, 
              ${orderData && orderData.ShippingAddress && orderData.ShippingAddress.city && orderData.ShippingAddress.city || ""}, 
              ${orderData && orderData.ShippingAddress && orderData.ShippingAddress.country && orderData.ShippingAddress.country || ""} - 
              ${orderData && orderData.ShippingAddress && orderData.ShippingAddress.pinCode && orderData.ShippingAddress.pinCode || ""}`}
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const BottomPriceSection = ({ orderData }) => {
  return (
    <>
      <Row className="bg-color-grey common-padding common-margin-top">
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col">
          <span>Sub Total: </span>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col text-align-right">
          <span>{(orderData && orderData.currencyCode) ? getSymbolFromCurrency(orderData.currencyCode) : "$"} {orderData && orderData.subTotal && (orderData.subTotal).toFixed(2)}</span>
        </Col>
      </Row>
      <Row className="bg-color-green common-padding total-amount">
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col">
          <span>Total </span>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col text-align-right">
          <span>{(orderData && orderData.currencyCode) ? getSymbolFromCurrency(orderData.currencyCode) : "$"} {orderData && orderData.grandTotal && (orderData.grandTotal).toFixed(2)}</span>
        </Col>
      </Row>
    </>
  );
}

export { ThankYouDetailCard, BottomPriceSection };
