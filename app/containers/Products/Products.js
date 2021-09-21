import React, { useState } from "react";
import { fadeInRight, fadeOutLeft } from "react-animations";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import "./Products.scss";

import { Container, Row, Col } from "react-bootstrap";
import { products } from "../../../dummyJson";
import { RedirectUrl } from "../../lib/constants/assets";

const styles = {
  common: {
    position: "absolute",
    right: 0,
    top: 0
  },
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  fadeOutLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeOutLeft, "fadeOutLeft"),
  },
  hidden: {
    visibility: "hidden",
    height: 0,
  },
};

function Products(props) {
  const [productData, setproductData] = useState(props.products);
  const [productIndex, setproductIndex] = useState(0);
  const { trans } = props;

  const setActiveProduct = async (product, index) => {
    setproductIndex(index);
    await setproductData(productData.map((item) => (item.status = false)));
    var temp = productData;
    temp[index].status = true;
    setproductData(temp);
  };

  return (
    <StyleRoot id="products">
      <div className="product-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6} className="position-relative">
              {productData.map((item, index) => (
                <div
                  className="d-flex justify-content-center active-image-container"
                  key={index}
                  style={[
                    styles.common,
                    item.status ? styles.fadeInRight : styles.fadeOutLeft,
                    !item.status && styles.hidden
                  ]}
                >
                  <img src={item.productImageURL} className="active-image" />
                </div>
              ))}
            </Col>
            <Col xs={12} md={6} lg={6} className="product-description">
              <Row>
                <div className="title-container">
                  <h2 className="heading color-text">
                    <Link to='/products'>{productData[productIndex].Name}</Link>
                  </h2>
                  <h1 className="heading">
                    {productData[productIndex].productSubHeading}
                  </h1>
                  {/* <a
                    href={`${productData[productIndex].productLink}`}

                    className="discover-link"
                  >
                </a>  */}
                  <Link to="/products" className="discover-link">
                    {trans("discover_more")}
                  </Link>
                </div>
              </Row>
              <Row className="image-carousel-container">
                {productData.map(
                  (item, index) =>
                    !item.status && (
                      <div
                        key={index}
                        className="tile-container"
                        onClick={() => setActiveProduct(item, index)}
                      >
                        <div className="image-container">
                          <img src={item.productCarouselImageURL} />
                        </div>
                        <h3 className="product-name">{item.Name}</h3>
                        <Link to={{
                          pathname: "/products",
                        }} className="discover-products">
                          {trans("discover")}</Link>
                      </div>
                    )
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </StyleRoot >
  );
}

export default Products;
