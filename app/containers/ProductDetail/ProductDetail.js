import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import { Helmet } from "react-helmet";
import { AccordianData, productSpecifications } from "../../../dummyJson";
import Accordian1 from "../../components/AccordianComponent/Accordian";
import AddToCart from "./AddToCart";
import i18n from "../../config/i18n_config";
import { productDetailsHotspotImage } from "../../../dummyJson";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { connect } from "react-redux";
// for api calls

import { fetchProductById } from "../../redux/actions/fetchProductById";
import NotifyMe from "../ProductShowCase/NotifyMe";


const styles = {
  common: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  fadeInUp: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
  hidden: {
    visibility: "hidden",
    height: 0,
  },
};


function ProductDetail({ productDetailData, ...props }) {
  const addedproduct = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  const [disableAddToCart, setDisableAddToCart] = useState(null);
  let productCountry = undefined;
  // const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    const { match, fetchProductById } = props;
    productCountry = props.location.state && props.location.state.countryCode;
    if (!props.geoLocationData.countryCode) return;
    fetchProductById({ id: match.params.id, lang: i18n.language, countryCode: productCountry || props.geoLocationData.countryCode });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [props.geoLocationData]);

  const imagesArr =
    productDetailData.images &&
    productDetailData.images.galleryImage.map((result) => ({
      original: result.original.imagePath,
      thumbnail: result.thumb.imagePath,
    }));


  useEffect(() => {
    if (productDetailData.countryCode) {
      const countryCode = localStorage.getItem("countryCode") || "";
      (countryCode && countryCode === productDetailData['countryCode']) ? setDisableAddToCart(false) : setDisableAddToCart(true);
    }
  }, [productDetailData.countryCode])

  useEffect(() => {
    if ((!addedproduct)) {
      setDisableAddToCart(true)
    } else {
      setDisableAddToCart(false);
    }
  }, [])
  // var hotspot = [];
  // productDetailsHotspotImage.map((i, index) =>
  //   hotspot.push({
  //     x: i.xCoordinate,
  //     y: i.yCoordiante,
  //     content: (
  //       <OverlayTrigger
  //         placement="top"
  //         overlay={
  //           <Tooltip id="tooltip-top">
  //             <strong>{i.productAttachment}</strong>.
  //           </Tooltip>
  //         }
  //       >
  //         <FontAwesomeIcon
  //           className="text-white"
  //           icon={i.imageUrl}
  //           onClick={() => onHotSpotClick(i.productAttachment)}
  //         />
  //       </OverlayTrigger>
  //     ),
  //   })
  // );

  // const onHotSpotClick = (bodyPart) => {
  //   console.log(bodyPart);
  // };

  // const selectImg = (img, index) => {
  //   setSelectedImg({ img, index });
  //   console.log("selectImg -> data", selectedImg)
  // };
  // console.log('notify me', props.NotifyMe.notifyme)
  return (
    <>
      <Helmet>
        <title>{`${productDetailData.productName} - diPulse`}</title>
        <meta name="description" content={productDetailData.shortDescription} />
        <meta property="og:title" content={`${productDetailData.productName} - diPulse`} />
        <meta property="og:description" content={productDetailData.shortDescription} />
        <meta property="og:url" content={productDetailData.permalink} />
        <meta property="og:image:width" content={productDetailData.images && productDetailData.images.galleryImage[0].original.width} />
        <meta property="og:image:height" content={productDetailData.images && productDetailData.images.galleryImage[0].original.height} />
        <meta name="twitter:card" content={productDetailData.images && productDetailData.images.galleryImage[0].original.imagePath} />
        <meta name="twitter:description" content={productDetailData.shortDescription} />
        <meta name="twitter:title" content={`${productDetailData.productName} - diPulse`} />
        <meta name="twitter:image" content={productDetailData.images && productDetailData.images.galleryImage[0].original.imagePath} />
      </Helmet>
      <StyleRoot>
        {Object.keys(productDetailData).length === 0 ? (
          <></>
        ) : (
            <div
              className="product-detail-wrapper"
              id="product-detail"
              style={styles.fadeInUp}
            >
              <Row>
                <Col className="detailpage-image-container" xs={12} sm={12} md={6} lg={6}>
                  <div className="image-wrapper">
                    {/* <ImageHotspots
                src={productDetails.productImage}
                className="product-image"
                hideMinimap={true}
                hideZoomControls={true}
                hideFullscreenControl={true}
                hideFullscreenControl={true}
                hotspots={hotspot}
              /> */}

                    <ReactImageGallery lazyLoad={true} items={imagesArr} showPlayButton={false} showNav={false} />
                  </div>
                </Col>
                <Col className="product-description" xs={12} sm={12} md={6} lg={6}>
                  <div className="product-detail">
                    <h2 className="heading">{productDetailData.productName}</h2>
                    <div className="pt-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: productDetailData.shortDescription,
                        }}
                      />
                    </div>
                  </div>
                  <Accordian1 data={AccordianData} productsData={productDetailData} productByCategory={props.productByCategory} />
                </Col>
              </Row>
              <AddToCart
                productSpecifications={productSpecifications}
                // productDetails={productsData}
                cartChange={props.cartChange}
                disableAddToCart={disableAddToCart}
                productsData={productDetailData}
                trans={props.trans}
              />
            </div>
          )}
      </StyleRoot>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetailData: state.fetchProductByIdReducer.productsData,
    productByCategory: state.fetchProductByCategoryReducer,
    NotifyMe: state.notifyMeReducers,
    geoLocationData: state.geoLocationReducer.geoLocationData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductById: (id) => {
      dispatch(fetchProductById(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
