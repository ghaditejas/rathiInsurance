import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fadeInDown, fadeOutUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Scrollspy from "react-scrollspy";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import i18n from "../../config/i18n_config";
import { HashLink } from "react-router-hash-link";
import MenuList from "../../components/MenuList";
import "./ProductShowCase.scss";

import ProductItem from "./ProductItem";
import { fetchAllProduct } from "../../redux/actions/fetchAllProducts";

import { searchProduct } from "../../redux/actions/searchproduct";
import ProductDetail from "../ProductDetail/ProductDetail";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
  fadeOutUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeOutUp, "fadeOutUp"),
  },
};

function ProductShowCase(props) {
  let history = useHistory();
  const searchedText = props.location.search.slice(3);
  let headingColor = "black";
  const [Categories, setCategories] = useState([]);
  const [activeScrollItem, setActiveScrollItem] = useState("ACCESORIES");
  let [showLeftHeading, setShowLeftHeading] = useState(false);
  let [products, setProduct] = useState([]);
  // const { proname } = useParams();
  const {
    match: { params },
    trans,
  } = props;
  useEffect(() => {
    //  if(!props.location.hash){
    const queryString = require("query-string");
    const parsed = queryString.parse(
      props.location.search ? props.location.search : props.match.params.id
    );
    let apiData = {
      requestBody: parsed.q ? { query: parsed.q, countryCode: props.geoLocationData.countryCode, languageCode: i18n.language } : null,
      url: parsed.q ? "/shop/newproduct" : "/shop/newproduct?languageCode=" + i18n.language + "&countryCode=" + props.geoLocationData.countryCode,
      method: parsed.q ? "POST" : "GET"
    }
    if (props.geoLocationData.countryCode) {
      props.fetchAllProduct(apiData);
    }
    return () => {
      window.onscroll = null;
    };
    // }
  }, [props.geoLocationData]);

  const setCategory = (category) => {
    const elmnt = document.getElementById(category);
    window.scroll({
      top:
        elmnt.offsetTop,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    props.ProductCategories.productCategories.forEach((val, index) => {
      products[index] = {
        category: [val],
        products: [],
      };
    });

    props.AllProduct.allProducts.forEach((val, index) => {
      const ind = props.ProductCategories.productCategories.indexOf(
        val.category[0]
      );
      if (ind !== -1) {
        products[ind].products.push(val);
      }
    });
    // console.log("products", products);
  }, [props.AllProduct]);

  useEffect(() => {
    setCategories(products.map((value) => value.category[0]));

    //detect scroll top event to hide left heading
    // window.onscroll = function() {
    //   let offset = window.pageYOffset;
    //   console.log("offset==>", offset);
    //   if (offset < 80) {
    //     setShowLeftHeading(false);
    //   } else if (offset >= 80 && offset < 200) {
    //     setShowLeftHeading(true);
    //   }
    // };

    window.onscroll = function () {
      let offset = window.pageYOffset;
      if (offset < 80) {
        setShowLeftHeading(false);
      } else {
        setShowLeftHeading(true);
      }
    };
  });

  const leftHeading = (animation, style) => {
    return (
      <div style={[animation, { position: "fixed", opacity: style }]}>
        <h4
          className="product-showcase-title"
          style={[
            {
              color: "black",
              opacity: 0.7,
            },
            style,
          ]}
        >
          {trans("product_showcase")}
        </h4>
      </div>
    );
  };

  return (
    <StyleRoot id="product-showcase">
      <Helmet>
        <title>Products - diPulse</title>
      </Helmet>
      {props.ProductCategories.productCategories &&
        props.AllProduct.allProducts ? (
          <div className="showcase-container" id="header21">
            <Container fluid>
              <Row className="product-showcase-row">
                <Col xs={12} md={3} lg={2} className="titles-sub">
                  <div className="left-title-container">
                    {showLeftHeading
                      ? leftHeading(styles.fadeInDown, 1)
                      : leftHeading(styles.fadeOutUp, 0)}
                  </div>
                  <div className="product-items">
                    <Scrollspy
                      items={Categories}
                      currentClassName="active"
                      className="scroll-spy"
                      onUpdate={({ id }) => {
                        setActiveScrollItem(id);
                      }}
                      offset={-250}
                    >
                      {products.map((item, index) => (
                        <li className="prod-categories" key={index} onClick={() => setCategory(item.category[0])}>
                          {/* <HashLink
                            to={
                              `#${activeScrollItem}` === `#${item.category[0]}`
                                ? null
                                : `#${item.category[0]}`
                            }
                            style={{ textDecoration: "none" }}
                          // onClick={() => setShowLeftHeading(true)}
                          > */}
                          <MenuList category={item} />
                          {/* </HashLink> */}
                        </li>
                      ))}
                    </Scrollspy>
                  </div>
                </Col>
                <Col xs={12} md={9} lg={10} className="products-sub">
                  <div className="scroll-area-content">
                    <Row className="nav-menu-row">
                      {showLeftHeading ? null : (
                        <div className="nav-menu" id="showcase-heading">
                          <div className="product-show-case-text  text-white">
                            <h1 className="show-case-text heading">
                              {trans("product_showcase")}
                            </h1>
                          </div>
                          {
                            (searchedText) ?
                              <div className='product-show-case-text'>
                                <span>Search Result for <span className='searched-text'>"{searchedText}"</span></span>
                                <Link className='ml-4 cursorpointer' to={{ pathname: '/products', state: { clearSearch: true } }}>
                                  <FontAwesomeIcon icon={faTimes} />
                                  <span className='ml-1'>Clear search</span>
                                </Link>
                              </div> : null
                          }
                        </div>
                      )}
                    </Row>
                    <div className="scrolling-div">
                      {products.map((item, index) => {
                        var className = "row product-list ";
                        if (item.category[0] === activeScrollItem) {
                          className += "active_e";
                          headingColor = "#5aa03d";
                        } else {
                          headingColor = "black";
                        }
                        return (
                          <ProductItem
                            key={item.category[0] + index}
                            className={className}
                            item={item}
                            cartChange={props.cartChange}
                            headingColor={headingColor}
                            trans={props.trans}
                          />
                        );
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : null}
    </StyleRoot>
  );
}

const mapStateToProps = (state) => {
  return {
    AllProduct: state.fetchAllProductReducers,
    ProductCategories: state.fetchProductCategoriesReducers,
    searchStatus: state.SearchProductReducer.SearchProductStatus,
    message: state.SearchProductReducer.message,
    geoLocationData: state.geoLocationReducer.geoLocationData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: (params) => {
      dispatch(fetchAllProduct(params));
    },
    searchProduct: (searchProductValues, history) => {
      dispatch(searchProduct(searchProductValues, history));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShowCase);
