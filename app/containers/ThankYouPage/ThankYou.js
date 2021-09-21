import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import "./ThankYou.scss";
import { getSingleOrderDetails } from '../../redux/actions/getSingleOrderDetails';
import { ThankYouDetailCard, BottomPriceSection } from './ThankYouComponents';
import ErrorComp from '../../components/ErrorComponent/ErrorComp';

function ThankYou({ singleOrderData, trans, ...props }) {
  const { singleOrderData: orderData, error = null } = singleOrderData;
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    const orderId = JSON.parse(localStorage.getItem("orderData"))["orderId"];
    const langCode = localStorage.getItem("selectedLangCode") || "en";
    const orderDetailsUrl = `/shop/order/fetch-by-id/${orderId}/?languageCode=${langCode}`;
    props.getSingleOrderDetails(orderDetailsUrl);
  }, []);

  useEffect(() => {
    if (error && error.error) {
      setShowError({ ...error, show: true });
    }
  }, [error && error.error])

  return (
    <div className="thank-you">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="thank-you-heading col">
            {showError && showError.error ? null : <>
              <h1 className="heading">{trans("pay_success")}</h1>
              <h2 className="heading padding-top">{trans("thankyou")}</h2>
            </>
            }
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="continue-shopping col padding-top">
            <button className="btn btn-outline-primary border-primary shopping-btn" >
              <Link to="/products">{trans("continue_shopping")}</Link>
            </button>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="order-list-lable text-align-left col padding-top">
            <ErrorComp error={error} showMessage={false} />
            <span>{trans("your_order_list")}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col padding-top">
            <Row className="bg-color-grey common-padding">
              <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col">
                <span>{trans("order_id")} </span><span>{orderData.orderId}</span>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col text-align-right">
                <span>{trans("payment_method")}</span><span>Card</span>
              </Col>
            </Row>

            {orderData && orderData.productDetails && orderData.productDetails.map((item, index) => {
              return <ThankYouDetailCard key={index} trans={trans} item={item} orderData={orderData} />
            })}

            <BottomPriceSection orderData={orderData} />
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col" />
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    singleOrderData: state.getSingleOrderDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleOrderDetails: (url) => {
      dispatch(getSingleOrderDetails(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
