import React, { useState, useEffect } from "react";
import "./AddToCart.scss";
import "../HomePage/Home.scss";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { Container, Row, Col, Form, InputGroup, Button, Toast } from "react-bootstrap";
import Assets from "../../lib/constants/assets";
import { Link, withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityCart from "../../components/QuantityCart/QuantityCart";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { validateCoupons } from "../../components/HookValidation/FormValidationRules";
import useForm from "../../components/HookValidation/UseForm";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { removeItemCart } from "../../redux/actions/removeItemCart.js";
import Products from "../Products/index";
import getSymbolFromCurrency from '../../lib/currency-symbol-map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  const[show,setShow] = useState(false);
  let {
    cartItem,
    subTotal,
    clearCart,
    removeFromCart,
    setupCart,
    removeItemCart,
    cartChange,
    calculateSubTotal,
    quantityChange,
    trans,
    currency
  } = props;

  // const clearCart = () => {
  //   /*login*/
  //   if (true) {
  //     let apiData = {
  //       userId: "8d379860-0024-4dd9-a863-aa3293091d06",
  //       clearAll: true,
  //     };
  //     removeItemCart("shop/cart", apiData, "DELETE");
  //   }

  //   localStorage.setItem("cart", JSON.stringify({}));
  //   cartChange();
  //   setupCart(JSON.parse(localStorage.getItem("cart")));
  // };

  // const removeFromCart = (productId, productCount) => {
  //   /*login*/
  //   if (true) {
  //     let apiData = {
  //       userId: "8d379860-0024-4dd9-a863-aa3293091d06",
  //       productId: productId,
  //       productCount: productCount,
  //     };
  //     props.removeItemCart("shop/cart", apiData, "DELETE");
  //   }
  //   delete cartItem[productId];
  //   localStorage.setItem("cart", JSON.stringify(cartItem));
  //   props.cartChange();
  //   setupCart(JSON.parse(localStorage.getItem("cart")));
  // };

  return (
    <div>
      <Row className="d-flex justify-content-left">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row lg={12} md={12} sm={12} xs={12} className="closebtn">
            <span className="cart-font">
              {trans('My_Shopping_Cart')} ({Object.entries(cartItem).length} {trans('item')})
            </span>
            <div class="clear-cart" onClick={() => clearCart()}>
              <FontAwesomeIcon icon={faTimes} />
              <a className="cart-font btn-clear-cart">{trans('CLEAR_CART')}</a>
            </div>
          </Row>
          {Object.entries(cartItem).map((i, index) => (
            <Row
              key={index}
              className={
                index == Object.keys(cartItem).length - 1
                  ? "cart-main"
                  : "cart cart-main"
              }
            >
              {/* <div>
                {calculateSubTotal(
                  i[1]["productCount"] * i[1]["product_price"]
                )}
              </div> */}
              <Col lg={3} md={3} sm={3} xs={3} className="col">
                <div
                  className="closebtn vertical-center"
                  style={{ borderBottomWidth: "0px", cursor: "pointer" }}
                  onClick={() => removeFromCart(i[1], i[1]["productCount"])}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div class="vertical-center img-container">
                  <img
                    src={i[1]["product_image"]}
                    className="product-image-cart"
                  />
                </div>
              </Col>
              <Col lg={5} md={5} sm={5} xs={5} className="col">
                <div class="mobile-view">
                  <Link to={"/products/" + i[1]["slug"]}>
                    <div class="vertical-center">
                      <h5 className="product-name">{i[1]["product_name"]}</h5>
                    </div>
                  </Link>
                  <div class="vertical-center">
                    <h5 className="product-price">
                    {getSymbolFromCurrency(i[1]["currencyCode"]) + (i[1]["productCount"] * i[1]["product_price"]).toFixed(2)}
                    </h5>
                  </div>
                </div>
                <div class="vertical-center desktop-view">
                  <Link to={{ pathname: "/products/" + i[1]["slug"] }}>
                    <h5 className="product-name">{i[1]["product_name"]}</h5>
                  </Link>
                </div>
                <div class="vertical-center desktop-view">
                  <h5 className="product-price">
                    {getSymbolFromCurrency(i[1]["currencyCode"]) + (i[1]["product_price"]).toFixed(2)}
                  </h5>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} className="col">
                <QuantityCart
                  quantityChange={quantityChange}
                  quantity={i[1]["productCount"]}
                  product={i[1]}
                />
                <div class="vertical-center desktop-view">
                  <h5 className="product-price">
                    {getSymbolFromCurrency(i[1]["currencyCode"]) + (i[1]["productCount"] * i[1]["product_price"]).toFixed(2)}
                  </h5>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Link to="/products" className="continue_shopping_cart_link">
            <p className="add-more-product">
              <span className="add-more-product-link">
                +{" "}
                {trans('continue_shopping_cart')}
              </span>
            </p>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.countryCurrency.currency,
    message: state.removeItemCart.message
  };
};
export default connect(mapStateToProps, null)(Cart)
