import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Toast } from "react-bootstrap";
import "./ProductQuickView.scss";
import ProductViewGallery from "./ProductViewGallery";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemCart } from "../../redux/actions/addItemCart.js";
import getSymbolFromCurrency from '../../lib/currency-symbol-map';
import i18n from "../../config/i18n_config";
import NotifyMe from "./NotifyMe";

const ProductQuickView = (props) => {
  const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [btnCartText, setBtnCartText] = useState('Add To Cart')
  const [cartMessage, setCartMessage] = useState('');
  const [showCartBtn, setShowCartBtn] = useState('')

  const addCart = (product) => {
    let cart_entry = {
      product_name: product.productName,
      product_image: product.images.featuredImage.thumb['imagePath'],
      product_price: product.inventory[0].productPrice,
      productCount: 1,
      productId: product.productId,
      slug: product.slug,
      vendorId: product.vendorId,
      languageCode: i18n.language,
      countryCode: product.countryCode,
      currencyCode: product.currencyCode,
      cartChange: props.cartChange,
    };
    setBtnCartText('Adding...')
    setDisabled(true);
    props.addItemCart(cart_entry)
  };

  useEffect(() => {
    if (props.resItemCart.Cart.productId === props.currprod.productId) {
      setDisabled(true);
      setBtnCartText('Added');
      setCartMessage(props.resItemCart.message);
      setShow(true);
    }
  }, [props.resItemCart]);
  useEffect(() => {
    setShow(false);
    if (props.currprod && props.geoLocation && props.currprod.countryCode === props.geoLocation && props.currprod.inventory[0].inventory) {
      setShowCartBtn('AddToCart');
    } else if (props.currprod && props.geoLocation && (props.currprod.countryCode !== props.geoLocation) || (!props.currprod.inventory[0].inventory)) {
      setShowCartBtn('Notify');
    }
    if (cartItems[props.currprod.productId]) {
      setDisabled(true);
      setBtnCartText('Added');
    } else {
      setDisabled(false);
      setBtnCartText('Add To Cart');
    }
  }, [props.currprod && props.geoLocation]);
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.hide(false)}
        dialogClassName="modal-main modal-dialog-centered"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='closeborderrem'></Modal.Header>
        <Modal.Body>

          <Container className="p-0" fluid>
            {show ? (
              <Toast onClose={() => { setShow(false); setCartMessage('') }} show={show} delay={2000} autohide>
                <Toast.Body bsPrefix="toast-content text-white">
                  {cartMessage}
                </Toast.Body>
              </Toast>
            ) : null}
            <Row>
              <Col md={6} className="p-0">
                <div>
                  <ProductViewGallery className="productimgstyle" images={props.currprod.images} />
                </div>
              </Col>
              <Col md={6}>
                <div className="product-details-inner">
                  <h2 className="productname-text">
                    {props.currprod.productName}
                  </h2>
                  <hr />
                  <Row>
                    <Col md={12}>
                      <span className="pricespan">{getSymbolFromCurrency(props.currprod.currencyCode) ? getSymbolFromCurrency(props.currprod.currencyCode) : "$"} {
                        props.currprod.inventory[0].productPrice
                      }</span>
                    </Col>
                    <Col md={12}>
                      <div className="product-detailsbtn">
                        <Link to={{ pathname: '/products/' + props.currprod.slug, state: { countryCode: props.currprod.countryCode } }} className="btn btn-primary product-deatils">
                          Show details
                        </Link>
                        {
                          showCartBtn == 'AddToCart' &&
                          <Button className="add-to-cart" disabled={disabled} onClick={() => addCart(props.currprod)} id="addcartbtn">
                            {btnCartText}
                          </Button>}
                        {showCartBtn == 'Notify' && <NotifyMe trans={props.trans} productId={props.currprod.productId} reason={!props.currprod.inventory[0].inventory && "inventory"} />
                        }
                      </div>
                    </Col>
                  </Row>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: props.currprod.shortDescription,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};


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
)(ProductQuickView);
