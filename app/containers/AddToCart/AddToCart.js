import React, { useState, useEffect } from "react";
import "./AddToCart.scss";
import "../HomePage/Home.scss";
// import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { Container, Row, Col, Toast } from "react-bootstrap";
import Assets from "../../lib/constants/assets";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import QuantityCart from "../../components/QuantityCart/QuantityCart";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { validateCoupons } from "../../components/HookValidation/FormValidationRules";
// import useForm from "../../components/HookValidation/UseForm";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { removeItemCart } from "../../redux/actions/removeItemCart.js";
import { addItemCart } from "../../redux/actions/addItemCart";
import { createOrder } from "../../redux/actions/createOrder";

// import Products from "../Products/index";
import CartAddress from "./cartAddress";
import Cart from "./Cart";
import Payment from "../Payment/Payment";
import EmptyCart from "../../components/EmptyCart/emptyCart";
import getSymbolFromCurrency from '../../lib/currency-symbol-map';
import i18n from "../../config/i18n_config";

function AddToCart({ orderData, currency, ...props }) {
  const { trans } = props;
  const { orderData: order } = orderData;
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(false);

  const styles = {
    common: {
      position: "absolute",
      right: 10,
      top: 0,
    },
    fadeIn: {
      animation: "x 4s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
    hidden: {
      visibility: "hidden",
      height: 0,
    },
  };

  // const validatedCoupon = () => {
  // };

  // const { values, errors, handleChange, handleSubmit } = useForm(validateCoupons, validatedCoupon);

  const [shippingMode, setUpShippingMode] = useState("shipping");
  const [cartItem, setupCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
  );
  const [disabledCheckout, setDisabledCheckout] = useState(false);

  let checkoutStatus = [trans("cart"), trans("address"), trans("payment")];

  let [currentScreenNumber, setCurrentScreenNumber] = useState(0);
  let [currencyCode, setCurrencyCode] = useState();

  const [subTotal, setSubTotal] = useState(0);
  let Total = 0;

  useEffect(() => {
    let currency = "";
    Object.keys(cartItem).length &&
      Object.entries(cartItem).map((item, index) => {
        Total = parseFloat(
          parseFloat(Total) +
          parseFloat(
            (
              item[1]["productCount"] *
              item[1]["product_price"]
            ).toFixed(2)
          )
        );
        currency = item[1]['currencyCode'];
      });
    console.log('currency', currency);
    setSubTotal(Total !== 0 ? Total.toFixed(2) : 0);
    setCurrencyCode(currency);
  }, [cartItem, currency]);

  // const cartItem = JSON.parse(localStorage.getItem('cart'));

  // let subTotal = 0;

  const calculateSubTotal = (productPrice) => {
    subTotal = subTotal + productPrice;
  };

  const removeFromCart = (product, productCount) => {
    // console.log("productId, productCount===>", productCount);
    let apiData = {
      userId: "",
      productId: parseInt(product.productId),
      productCount: parseInt(productCount),
      languageCode: i18n.language,
      countryCode: product.countryCode,
      vendorId: product.vendorId,
      cartChange: { cartCount: props.cartChange, setCart: setupCart },
      currencyCode: product.currencyCode,
    };
    props.removeItemCart(apiData);
    setShow(true);
    // setShowCart(true);

    // }
    // delete cartItem[productId];
    // localStorage.setItem("cart", JSON.stringify(cartItem));
    // props.cartChange();
    // setupCart(JSON.parse(localStorage.getItem("cart")));
  };

  const quantityChange = (product, type) => {
    // cartItem[productId]["productCount"] = quantity;
    // localStorage.setItem("cart", JSON.stringify(cartItem));
    // setupCart(JSON.parse(localStorage.getItem("cart")));
    if (type === "increment") {
      let cart_entry = {
        product_name: product.product_name,
        product_image: product.product_image,
        product_price: product.product_price,
        productCount: "1",
        productId: product.productId,
        slug: product.slug,
        vendorId: product.vendorId,
        languageCode: i18n.language,
        currencyCode: product.currencyCode,
        countryCode: product.countryCode,
        cartChange: { cartCount: props.cartChange, setCart: setupCart },
      };
      props.addItemCart(cart_entry);
    } else {
      removeFromCart(product, 1);
    }
  };

  const clearCart = () => {
    let apiData = {
      userId: "",
      clearAll: true,
      cartChange: { cartCount: props.cartChange, setCart: setupCart },
    };
    props.removeItemCart(apiData);
    // setShow(true);
    // localStorage.setItem("cart", JSON.stringify({}));
    // props.cartChange();
    // setupCart(JSON.parse(localStorage.getItem("cart")));
  };

  // const checkout = () => {
  //   if (!localStorage.getItem("Token")) {
  //     props.history.push({
  //       pathname: "/login",
  //       fromPath: "/cart",
  //     });
  //   } else {
  //     props.history.push("/");
  //   }
  // };

  const callCheckout = (e) => {
    e.preventDefault();
    console.log("orderData -> callCheckout", orderData);
    console.log("order -> callCheckout", order);
    const createOrderUrl = "/shop/checkout";
    const languageCode = localStorage.getItem("selectedLangCode");
    const createOrderData = {
      billingAddressId: 0,
      shippingAddressId: 0,
      paymentType: "stripe",
      languageCode: languageCode,
    };
    props.createOrder(createOrderUrl, createOrderData, {
      changeScreenNumber: changeScreenNumber,
      cartChange: props.cartChange,
    });
    // Object.keys(order).length > 0 && ;
  };

  const changeScreenNumber = (index) => {
    // console.log("changeScreenNumber -> changeScreenNumber", index)
    setCurrentScreenNumber(index);
  };

  useEffect(() => {
    if (currentScreenNumber == 1) {
      setDisabledCheckout(true);
      if (props.Address.length > 0) {
        setDisabledCheckout(false);
      }
    }
  }, [props.Address.length, currentScreenNumber]);

  let disableClicks = currentScreenNumber > 1;

  return (
    <StyleRoot>
      {Object.keys(cartItem).length === 0 ? (
        <>
          <Container className="main-container" fluid>
            <div className="wrapper" style={styles.fadeIn}>
              <div className="wrapper">
                <div className="add-to-cart-wrapper" id="faq">
                  <Container>
                    <Row>
                      <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className="cart-main"
                      >
                        <Row className="d-flex heading-main">
                          <Col lg={12} md={12} sm={12}>
                            {/* <Toast onClose={() => setShow(false)} show={show} delay='3000' autohide>
                            <Toast.Body bsPrefix="toast-content text-white">
                              {props.message}
                            </Toast.Body>
                          </Toast> */}
                            <EmptyCart trans={trans} clearCart={clearCart} removeFromCart={removeFromCart} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* <Products trans={props.trans} /> */}
                  </Container>
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : (
          <Container className="main-container" fluid>
            <div className="wrapper" style={styles.fadeIn}>
              <div className="wrapper">
                <div className="add-to-cart-wrapper" id="faq">
                  {(props.message) ?
                    <Toast onClose={() => setShow(false)} show={show} delay='3000' autohide>
                      <Toast.Body bsPrefix="toast-content text-white">
                        {props.message}
                      </Toast.Body>
                    </Toast> : null
                  }
                  <Container>
                    <Row className="d-flex justify-content-center heading-main">
                      <Col lg={8} md={8} sm={12}>
                        <div className="d-flex heading-wrapper">
                          <h2 className="add-to-cart-heading heading">
                            {trans("shopping")}
                          </h2>
                          <h1 className="add-to-cart-subheading heading">
                            {trans("CART")}
                          </h1>
                        </div>
                      </Col>
                      <Col
                        lg={4}
                        md={4}
                        sm={12}
                        className="menu-line-container d-flex align-items-center"
                        style={{ flexDirection: "column" }}
                      >
                        <div className="status-container">
                          {checkoutStatus.map((item, index) => (
                            <div
                              class="menu"
                              key={index}
                            // onClick={() => disableClicks ? null : setCurrentScreenNumber(currentScreenNumber + 1)}
                            >
                              <span
                                style={{
                                  color:
                                    index <= currentScreenNumber
                                      ? "green"
                                      : "black",
                                }}
                              >
                                {item}
                              </span>
                              <div
                                className={
                                  index <= currentScreenNumber
                                    ? "green dot"
                                    : "black dot"
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div class="menu-line" />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={12} className="cart-main">
                        {currentScreenNumber == 0 && (
                          <Cart
                            cartItem={cartItem}
                            subTotal={subTotal}
                            setupCart={setupCart}
                            removeItemCart={props.removeItemCart}
                            cartChange={props.cartChange}
                            clearCart={clearCart}
                            removeFromCart={removeFromCart}
                            calculateSubTotal={calculateSubTotal}
                            quantityChange={quantityChange}
                            trans={trans}
                          />
                        )}
                        {currentScreenNumber == 1 && (
                          <CartAddress history={props.history} trans={trans} />
                        )}
                        {currentScreenNumber == 2 && (
                          <Payment
                            orderData={order}
                            currencyCode={currencyCode}
                            trans={trans}
                            changeScreenNumber={changeScreenNumber}
                          />
                        )}

                        {/* <Row className="d-flex justify-content-left footer-cart">
                      <Col lg={12} md={12} sm={12} className="footer-wrapper">
                        <Form onSubmit={handleSubmit}>
                          <Row className="cart-right-footer">
                            <Col lg={6} md={8} sm={12} className="footer-left">
                              <InputGroup>
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="inputGroupPrepend">
                                    <img
                                      src={Assets.Coupon}
                                      className="coupon-img"
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                  className={
                                    errors.couponCode
                                      ? values.couponCode !== "" &&
                                        values.couponCode !== undefined
                                        ? "is-invalid input-text-active coupon-add"
                                        : "is-invalid coupon-add"
                                      : values.couponCode !== "" &&
                                        values.couponCode !== undefined
                                      ? "input-text-active coupon-add"
                                      : "coupon-add"
                                  }
                                  type="text"
                                  size="sm"
                                  placeholder="Coupon Code"
                                  name="couponCode"
                                  onChange={handleChange}
                                  value={values.couponCode || ""}
                                />
                                {errors.couponCode && (
                                  <p className="invalid-coupon">
                                    {errors.couponCode}
                                  </p>
                                )}
                              </InputGroup>
                              <Button
                                type="submit"
                                disabled={
                                  Object.entries(cartItem).length > 0
                                    ? false
                                    : true
                                }
                                className="btn apply-coupon-btn border-primary"
                              >
                                APPLY COUPON
                              </Button>
                            </Col>
                            {/* <Col lg={5} md={6} sm={12} className="footer-right desktop-view">
                         
                        <Button type="submit" disabled={Object.entries(cartItem).length > 0 ? false:true} className="btn update-cart">UPDATE CART</Button>
                        </Col> */}
                        {/*</Row>
                        </Form>
                      </Col>
                    </Row>
                  */}
                      </Col>
                      {/* <Col lg={1} md={1} sm={1}></Col> */}

                      <Col lg={4} md={4} sm={12} className="cart-total">
                        <Row className="d-flex justify-content-center cart-right-content">
                          <Col lg={12} md={12} sm={12}>
                            <div className="d-flex justify-content-center">
                              <h4 className="text-white cart-total-heading">
                                {trans("ORDER_SUMMARY")}
                              </h4>
                            </div>
                            <Row className="subtotal">
                              <Col lg={5} md={5} sm={5} xs={5}>
                                <p className="text-white right-sub-title">
                                  {trans("SUBTOTAL")}
                                </p>
                              </Col>
                              <Col lg={7} md={7} sm={7} xs={7}>
                                <h5 className="text-white right-side-value">
                                  {getSymbolFromCurrency(currencyCode)} {subTotal}
                                </h5>
                              </Col>
                            </Row>
                            <Row className="shipping">
                              <Col lg={5} md={5} sm={5} xs={5}>
                                <p className="text-white right-sub-title">
                                  {trans("SHIPPING")}
                                </p>
                              </Col>
                              <Col lg={7} md={7} sm={7} xs={7}>
                                <div
                                  onClick={() =>
                                    disableClicks
                                      ? null
                                      : setUpShippingMode("shipping")
                                  }
                                  className="shipping-mode-div right-side-value"
                                >
                                  <label
                                    className={
                                      shippingMode === "shipping"
                                        ? "text-white shipping-mode active"
                                        : "text-white shipping-mode non-active"
                                    }
                                  >
                                    {trans("Free_Shipping")}
                                  </label>
                                </div>
                                <div
                                  onClick={() =>
                                    disableClicks
                                      ? null
                                      : setUpShippingMode("local")
                                  }
                                  className="shipping-mode-div right-side-value"
                                >
                                  <label
                                    className={
                                      shippingMode === "local"
                                        ? "text-white shipping-mode active"
                                        : "text-white shipping-mode non-active"
                                    }
                                  >
                                    {trans("Local_Packup")}
                                  </label>
                                </div>
                                {/* <div
                                  onClick={() => disableClicks ? null : setUpShippingMode("flat")}
                                  className="shipping-mode-div right-side-value"
                                >
                                  <label
                                    className={
                                      shippingMode === "flat"
                                        ? "text-white shipping-mode active"
                                        : "text-white shipping-mode non-active"
                                    }
                                  >
                                    {trans('Flat_Rate')} &euro; 10
                                  </label>
                                </div> */}
                              </Col>
                            </Row>
                            <Row className="change-address">
                              <Col
                                lg={12}
                                md={12}
                                sm={12}
                                className="change-address-col"
                              />
                            </Row>
                            {/* <Row>
                    <Col lg={12} md={12} sm={12}>
                        <hr className="total-calculation" />
                    </Col>
                </Row> */}
                            <Row className="checkout-total">
                              <Col lg={5} md={5} sm={5} xs={5}>
                                <p className="text-white right-sub-title">
                                  {trans("TOTAL")}
                                </p>
                              </Col>
                              <Col lg={7} md={7} sm={7} xs={7}>
                                <h5 className="text-white right-side-value total-amount">
                                  {getSymbolFromCurrency(currencyCode)}
                                  {shippingMode === "flat"
                                    ? parseInt(subTotal) + 10
                                    : subTotal}
                                </h5>
                              </Col>
                            </Row>
                            <Row className="btn-main">
                              <Col lg={12} md={12} sm={12}>
                                <div className="d-flex justify-content-center">
                                  <button
                                    disabled={
                                      Object.entries(cartItem).length > 0 &&
                                        !disableClicks &&
                                        !disabledCheckout
                                        ? false
                                        : true
                                    }
                                    className="btn btn-primary checkout-btn"
                                    onClick={(e) =>
                                      currentScreenNumber == 0
                                        ? setCurrentScreenNumber(
                                          currentScreenNumber + 1
                                        )
                                        : callCheckout(e)
                                    }
                                  >
                                    {currentScreenNumber == 0
                                      ? trans("CONTINUE")
                                      : trans("PROCEED_TO_CHECKOUT")}
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Container>
        )}
    </StyleRoot>
  );
}

const mapStateToProps = (state) => {
  // console.log("mapStateToProps -> state", state)
  return {
    message: state.removeItemCart.message,
    orderData: state.createOrderReducer,
    currency: state.countryCurrency.currency,
    Address: state.fetchAddressReducers.addresses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemCart: (params) => {
      dispatch(addItemCart(params));
    },
    removeItemCart: (params) => {
      dispatch(removeItemCart(params));
    },
    createOrder: (url, params, method) => {
      dispatch(createOrder(url, params, method));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
