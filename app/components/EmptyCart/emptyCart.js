import React, { useState, useEffect } from "react";
import "./emptyCart.scss";
import { Container, Row, Col, Button, Toast } from 'react-bootstrap';
import Assets from "../../lib/constants/assets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemCart } from "../../redux/actions/removeItemCart";
function EmptyCart(props) {
  let { trans } = props;
  return (
    <div className="empty-cart">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="empty-cart-img">
            <img src={Assets.EmptyCartImage} className="empty-cart" />
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="empty-text">
            <h1 className="heading">{trans('hey_it_feels_so_light')}</h1>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="empty-cart-text">
            <span>{trans(`cart_value`)}</span>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Link to='/products' className="btn btn-primary go-to-store-btn">{trans('goto_store_btn')}</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    message: state.removeItemCart.message
  };
};
export default connect(mapStateToProps, null)(EmptyCart);