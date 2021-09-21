import React, { useState, useEffect } from "react";
import { Container, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import "./AddToCart.scss";
import { addItemCart } from "../../redux/actions/addItemCart.js";
import getSymbolFromCurrency from '../../lib/currency-symbol-map';
import i18n from "../../config/i18n_config";
import NotifyMePopup from "../ProductDetail/notifyMePopup";

function AddToCart({ disableAddToCart, productsData, currency, ...props }) {
  const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [btnCartText, setBtnCartText] = useState('Add To Cart')
  const [cartMessage, setCartMessage] = useState('')
  const [showCartBtn, setShowCartBtn] = useState('')
  const { category, size, color, shocks, currencyCode } = productsData;
  const price = productsData.inventory[0].productPrice;
  useEffect(() => {
    if (props.resItemCart.Cart.productId === productsData.productId) {
      setDisabled(true);
      setBtnCartText('Added');
      setCartMessage(props.resItemCart.message);
      setShow(true);
    }
  }, [props.resItemCart]);
  useEffect(() => {
    setShow(false)
    if (productsData && props.geoLocation && productsData.countryCode === props.geoLocation && productsData.inventory[0].inventory > 0) {
      setShowCartBtn('AddToCart');
    } else if ((productsData && props.geoLocation && productsData.countryCode !== props.geoLocation) || (productsData.inventory[0].inventory < 1)) {
      setShowCartBtn('Notify');
    }
    if (cartItems[productsData.productId]) {
      setDisabled(true);
      setBtnCartText('Added');
    } else {
      setDisabled(false);
      setBtnCartText('Add To Cart');
    }
  }, [productsData.productId, props.geoLocation]);

  const addCart = (product) => {
    let cart_entry = {
      product_name: product.productName,
      product_image: product.images.featuredImage.thumb['imagePath'],
      product_price: product.inventory[0].productPrice,
      productCount: "1",
      productId: product.productId,
      slug: product.slug,
      vendorId: product.vendorId,
      languageCode: i18n.language,
      countryCode: product.countryCode,
      currencyCode: product.currencyCode,
      cartChange: props.cartChange,
    };
    /*login*/
    setBtnCartText('Adding...')
    setDisabled(true);
    props.addItemCart(cart_entry)
  };


  const BottomLabel = ({ label, value }) => {
    return value ? <div className=" flex-fill ">
      <h6> {label}</h6>
      <h4> {value}</h4>
    </div> : null;
  }

  return (
    <Container className="p-0 add-to-cart-container" fluid>
      {show ? (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body bsPrefix="toast-content text-white">
            {cartMessage}
          </Toast.Body>
        </Toast>
      ) : null}
      <div className="d-flex flex-style p-4">
        <BottomLabel label={'CATEGORY'} value={category[0]} />
        <BottomLabel label={'COLOR'} value={color} />
        <BottomLabel label={'SIZE'} value={size} />
        <BottomLabel label={'SHOCKS'} value={shocks} />
        <BottomLabel label={'COMPONENT COST'} value={getSymbolFromCurrency(currencyCode) ? getSymbolFromCurrency(currencyCode) + price : "$" + price} />
        <div className="d-flex justify-content-center">
          {
            showCartBtn == 'AddToCart' &&
            <button
              className="btn btn-primary checkout-btn"
              onClick={() => addCart(productsData)}
              disabled={disabled}
            >
              {btnCartText}
            </button>
          }
          {showCartBtn == 'Notify' && <NotifyMePopup trans={props.trans} productId={productsData.productId} reason={!productsData.inventory[0].inventory && "inventory"} />}

        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    resItemCart: state.addItemCart,
    currency: state.countryCurrency.currency,
    NotifyMe: state.notifyMeReducers,
    geoLocation: state.geoLocationReducer.geoLocationData.countryCode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemCart: (params) => {
      dispatch(addItemCart(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
