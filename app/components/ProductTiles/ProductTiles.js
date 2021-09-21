import React from "react";
import { fadeInUpBig } from "react-animations";
import { Link, withRouter } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import getSymbolFromCurrency from '../../lib/currency-symbol-map'

const styles = {
  fadeInUpBig: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUpBig, "fadeInUpBig"),
  },
};
import "./ProductTiles.scss";
import ProductQuickView from "../../containers/ProductShowCase/ProductQuickView";
import { func } from "prop-types";
import { useTranslation } from 'react-i18next';

import { connect } from "react-redux";

function ProductTiles(props) {
  const product = props.product;
  var currprod = props.product;
  const [modalShow, setModalShow] = React.useState(false);

  function handleChange(event, currprod) {
    setModalShow(true);
  }
  const { t } = useTranslation()
  return (
    <StyleRoot className="tile-parent">
      <div className="tile-conatiner" onClick={(event, product) => handleChange(event, currprod)}>
        <div className="image-container">
          <img
            className="w-100"
            src={product.images.featuredImage.thumb.imagePath}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="product-name text-white">
            <Link to={{ pathname: `/products/${product.slug}`, state: { countryCode: product.countryCode } }}>{product.productName}</Link>
          </p>
          <p
            className="product-price text-white"
            style={{ fontSize: " 1.4rem" }}
          >
            {getSymbolFromCurrency(product.currencyCode) ? getSymbolFromCurrency(product.currencyCode) : "$"} {product.inventory[0].productPrice}
          </p>
        </div>
      </div>
      <ProductQuickView
        show={modalShow}
        hide={setModalShow}
        currprod={currprod}
        cartChange={props.cartChange}
        trans={props.trans}
      />
    </StyleRoot>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.countryCurrency.currency
  };
};
export default connect(mapStateToProps, null)(ProductTiles)