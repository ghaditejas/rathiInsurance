import React, { useEffect } from "react";
import "./orderHistory.scss";
import { Container, Row, Col } from "react-bootstrap";
import Address from "../Address/Address";
import { connect } from "react-redux";
import { getOrderHistory } from "../../redux/actions/getOrderHistory";
import { OrderHistoryCard, NoOrderView } from "./OrderHistoryComponents";

function OrderHistory({ orderHistoryData, ...props }) {
  const { orderHistoryData: historyData, error = null } = orderHistoryData;
  const { trans } = props;

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("User"))['uuid'];
    const langCode = localStorage.getItem("selectedLangCode") || "en";
    const orderHistoryUrl = `/shop/order/fetch-orders/${userId}/?languageCode=${langCode}`;
    props.getOrderHistory(orderHistoryUrl);
  }, [])

  const orderClick = (e, data) => {
    e.preventDefault();
    // localStorage.setItem("selectedOrderId", data.orderId);
    props.history.push({
      pathname: "/orders/" + data.orderId,
      historyData: data
    });
  }

  return (
    <div className="order-history-container">
      <Container>
        <div className="order-history-heading">
          <h2 className="heading">{trans("orders")}</h2>
        </div>

        {!props.loader &&
          (!historyData || historyData.length == 0) &&
          <NoOrderView trans={trans} error={error && error.error && error.message} />
        }

        {historyData && historyData.length > 0 && historyData.map((data, index) => {
          return <OrderHistoryCard key={index} orderClick={(e) => orderClick(e, data)} histData={data} trans={trans} />
        })}

      </Container>

      <div className="address-container">
        <Row className="address">
          <Col lg={12}>
            <Address trans={props.trans} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orderHistoryData: state.getOrderHistoryReducer,
    loader: state.setLoader.loader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderHistory: (url) => {
      dispatch(getOrderHistory(url));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);