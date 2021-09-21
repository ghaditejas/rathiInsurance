import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Modal, Toast } from "react-bootstrap";
import { connect } from 'react-redux';
import "./OrderDetails.scss";
import { OrderHistoryCard } from '../../components/order-history/OrderHistoryComponents';
import { getSingleOrderDetails } from '../../redux/actions/getSingleOrderDetails';
import { ThankYouDetailCard, BottomPriceSection } from '../ThankYouPage/ThankYouComponents';
import ErrorComp from '../../components/ErrorComponent/ErrorComp';
import RequestRefund from '../RequestRefund/requestRefund';
import { requestRefund, resetRefundMessage } from "../../redux/actions/requestRefund";
import "../RequestRefund/requestRefund.scss";

function OrderDetails({ location, trans, singleOrderData, message, ...props }) {
  const [show, setShow] = useState(false);
  const [refundMessage, setRefundMessage] = useState("")
  let UserInfo = JSON.parse(localStorage.getItem("User"));
  const requestRefund = () => {
    let method = 'PATCH'
    let apiData = {
      params: {
        orderId: singleOrderData.singleOrderData.orderId,
        userId: UserInfo.uuid
      },
    };
    props.requestRefund(apiData, method);
    setShow(false)
  };

  const { orderId } = singleOrderData.singleOrderData;
  const { historyData = null } = location;
  const { singleOrderData: orderData = null, error = null } = singleOrderData;
  const [data, setData] = useState(null);
  const { match } = props;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const goBack = () => setShow(false)
  useEffect(() => {
    if (historyData && Object.keys(historyData).length !== 0) {
      setData(historyData);
    }
  }, [historyData && historyData.orderId && historyData.orderId]);

  useEffect(() => {
    if (orderData && Object.keys(orderData).length !== 0 && !historyData) {
      setData(orderData);
    }
  }, [orderData && orderData.orderId && orderData.orderId]);

  useEffect(() => {
    // if (!historyData) {
    const token = localStorage.getItem("Token");
    if (token) {
      const orderId = match.params.id;
      const langCode = localStorage.getItem("selectedLangCode") || "en";
      const singleOrderDetailsUrl = `/shop/order/fetch-by-id/${orderId}/?languageCode=${langCode}`;
      props.getSingleOrderDetails(singleOrderDetailsUrl);
    } else {
      props.history.push({
        pathname: "/login",
        fromPath: location.pathname
      });
    }
    // }
  }, [])
  useEffect(() => {
    if (message) {
      setRefundMessage(message);
      const token = localStorage.getItem("Token");
      if (token) {
        const orderId = match.params.id;
        const langCode = localStorage.getItem("selectedLangCode") || "en";
        const singleOrderDetailsUrl = `/shop/order/fetch-by-id/${orderId}/?languageCode=${langCode}`;
        props.getSingleOrderDetails(singleOrderDetailsUrl);
      } else {
        props.history.push({
          pathname: "/login",
          fromPath: location.pathname
        });
      }
      props.resetRefundMessage();
    }
  }, [message])


  return (
    <div className="thank-you">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="thank-you-heading col">
            <h1 className="heading">{trans("order_dtls")}</h1>

            {refundMessage ? <Toast delay={3000} autohide>
              <Toast.Body>
                {refundMessage}
              </Toast.Body>
            </Toast> : null}
            {
              (singleOrderData.singleOrderData.isRefundable) &&
              <Button className="btn btn-outline-cancel request-refund-btn" onClick={handleShow}>
                Request Refund
            </Button>
            }
            {show ? <Modal
              show={show}
              onHide={props.onHide}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header className='borderrem'>
                <h3>Are you sure you want to refund this order?<br />
                      Your order will be cancelled.</h3>
              </Modal.Header>
              <Modal.Body className="modal-body-content">
                <div className="request-refund-main">
                  <div className="request-refund-container">
                    <Row>
                      <Col xl={12}>
                        <Form>
                          <Form.Group className="button-align">
                            <Button
                              className="btn btn-dark" onClick={requestRefund}>
                              Yes, continue
                      </Button>
                            <Button
                              className="btn btn-dark" onClick={goBack}>
                              No, go back
                      </Button>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Modal.Body>
            </Modal> : null}
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="col padding-top">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} className="order-history-container col">
                {!error ?
                  <OrderHistoryCard
                    trans={trans}
                    histData={historyData}
                    orderData={orderData}
                  /> : <ErrorComp error={error} customMessage={"Order not found"} showMessage={false} />}
              </Col>
            </Row>
            {data && data.productDetails && data.productDetails.map((item, index) => {
              return <ThankYouDetailCard key={index} trans={trans} item={item} orderData={data} />
            })}
            {!error && <BottomPriceSection orderData={data} />}
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className="col">

          </Col>
        </Row>
      </Container>
    </div >
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    singleOrderData: state.getSingleOrderDetailsReducer,
    message: state.requestRefundReducers.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleOrderDetails: (url) => {
      dispatch(getSingleOrderDetails(url));
    },
    requestRefund: (params, method) => {
      dispatch(requestRefund(params, method));
    },
    resetRefundMessage: () => {
      dispatch(resetRefundMessage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);