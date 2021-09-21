import React, { useState, useEffect } from "react";
import "./homecarousel.scss";
import Carouselitem from "../../components/CarouselPage/Carouselitem";
import {
  FacebookLink,
  InstaLink,
  YoutubeLink,
  RedirectUrl,
} from "../../lib/constants/assets";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { fadeInRight, fadeOutLeft, flipInX } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Homecarousel(props) {
  const styles = {
    common: {
      position: "absolute",
      right: 10,
      top: 0,
    },
    flipInX: {
      animation: "x 2s",
      animationName: Radium.keyframes(flipInX, "flipInX"),
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

  const imgs = props.data.data;
  const bottomSlider = props.data.bottomSlider;
  const latestUpdate = props.data.latesUpdate;
  const [active, setActiveIndex] = useState(0);
  const [footerindex, setFooterIndex] = useState(0);
  const increment = bottomSlider.length % 2 == 0 ? 2 : 1;
  const carouselTimer = 10000; // in seconds
  let autoSlideTimer = null;

  useEffect(() => {
    autoSlideTimer = setInterval(() => {
      setActiveIndex(active < imgs.length - 1 ? active + 1 : 0);
    }, carouselTimer);
    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [active]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFooterIndex((footerindex + 1) % latestUpdate.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [footerindex]);

  const watchVideo = () => {
    awardVideo.play();
    const elmnt = document.getElementById("videoSection");
    window.scroll({
      top: elmnt.offsetTop - document.getElementById("header").offsetHeight,
      behavior: "smooth",
    });
  };

  const { trans } = props;

  return (
    <div className="main-container-wrapper">
      <div className="carousel-container" id="homeCarousel">
        <div className="carousel-parent">
          {/* <img className="animated-stick" src={Assets.StickImage} /> */}
          <Carousel controls={false} activeIndex={active} indicators={false}>
            {imgs.map((i, index) => (
              <Carousel.Item
                key={index}
                bsPrefix="carousel-item carousel-item-custom"
              >
                <div className="wrap-img-div">
                  <img
                    className="w-100"
                    src={i.sliderImageUrl}
                    alt="First slide"
                  />
                  <Container className="mw-100">
                    <div className="text-image-wrapper">
                      <div className="text-image">
                        <h2 className="heading">{i.heading1}</h2>
                        <h1 className="heading heading1">{i.heading2}</h1>
                        <h1 className="heading heading2">{i.heading3}</h1>
                        <Button
                          className="button-position"
                          variant="outline-primary border-primary"
                          onClick={
                            i.videoLink
                              ? () => watchVideo()
                              : () =>
                                  (window.location.href = `${RedirectUrl}products`)
                          }
                        >
                          {" "}
                          {i.videoLink
                            ? trans("watch_video")
                            : trans("view_products")}
                        </Button>
                      </div>
                    </div>
                  </Container>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="upcoming-activity bottom0">
            {latestUpdate.map((i, index) =>
              index == footerindex ? (
                <StyleRoot key={index} className="flip-img">
                  <div
                    className="d-flex justify-content-start first-bottom-index"
                    style={styles.flipInX}
                  >
                    <div className="image-align">
                      <img src={i.imageUrl} />
                    </div>
                    <div className="d-flex flex-column p-2 text-description">
                      <p className="product-number">{i.productNumber}</p>
                      {/* <a
                        href={`${i.link}`}
                        className="no-style-underline"
                      > */}
                      <Link to={"/products/" + i.slug} >
                        <p className="product-name">
                          {i.label} <span>({i.for})</span>
                        </p>
                      </Link>
                      {/* </a> */}
                      <p className="product-description-banner">
                        {i.description}
                      </p>
                    </div>
                  </div>
                </StyleRoot>
              ) : null
            )}
            <div className="d-flex align-items-center justify-content-between bg-image">
              <Carousel controls={false} indicators={false}>
                {bottomSlider.map((i, index) =>
                  window.innerWidth > 767 ? (
                    (bottomSlider[index + increment] && index % 2 != 0) ||
                    index == 0 ? (
                      <Carouselitem
                        index={index != 0 ? (index = index + 1) : index}
                        mobile={false}
                        key={index}
                        bottomslider={bottomSlider}
                      />
                    ) : null
                  ) : (
                    <Carouselitem
                      index={index}
                      mobile={true}
                      key={index}
                      bottomslider={bottomSlider}
                    />
                  )
                )}
              </Carousel>
            </div>
            <div className="caraousel-number">
              <div className="number-container">
                {imgs.map((_, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        active === index ? "active-index" : "inactive-index"
                      }
                      onClick={() => setActiveIndex(index)}
                    >
                      {(index + 1).toString()}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className="align-social-media">
            <a href={FacebookLink}  className="text-spacing">
              FACEBOOK
            </a>
            <a href={InstaLink}  className="text-spacing">
              INSTAGRAM
            </a>
            <a href={YoutubeLink}  className="text-spacing">
              YOUTUBE
            </a>
          </div> */}
        </div>
      </div>

      <div className="mobile-view-carousel-container" id="homeCarousel">
        <div className="mobile-view-carousel-parent">
          {/* <img className="animated-stick" src={Assets.StickImage} /> */}
          <Carousel controls={false} activeIndex={active} indicators={false}>
            {imgs.map((i, index) => (
              <Carousel.Item
                key={index}
                bsPrefix="carousel-item carousel-item-custom"
              >
                <div className="mobile-view-wrap-img-div">
                  <img
                    className="w-100"
                    src={i.silderMobileImageUrl}
                    alt="First slide"
                  />
                  <Container className="mw-100">
                    <div className="mobile-view-text-image-wrapper">
                      <div className="mobile-view-text-image">
                        <h2 className="heading">{i.heading1}</h2>
                        <h1 className="heading">{i.heading2}</h1>
                        <h1 className="heading">{i.heading3}</h1>
                        <Button
                          className="button-position view-product-btn"
                          variant="outline-success"
                          onClick={
                            i.videoLink
                              ? () => watchVideo()
                              : () =>
                                  (window.location.href = `${RedirectUrl}products`)
                          }
                        >
                          {" "}
                          {i.videoLink
                            ? trans("watch_video")
                            : trans("view_products")}
                        </Button>
                      </div>
                    </div>
                  </Container>
                </div>
              </Carousel.Item>
            ))}
            <div className="mobile-view-caraousel-number">
              <div className="number-container">
                {imgs.map((_, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        active === index ? "active-index" : "inactive-index"
                      }
                      onClick={() => setActiveIndex(index)}
                    >
                      {(index + 1).toString()}
                    </span>
                  );
                })}
              </div>
            </div>
          </Carousel>

          <div className="mobile-view-upcoming-activity bottom0">
            {latestUpdate.map((i, index) =>
              index == footerindex ? (
                <StyleRoot key={index}>
                  <div
                    className="d-flex justify-content-start first-bottom-index bg-image"
                    style={styles.flipInX}
                  >
                    <div className="image-align">
                      <img src={i.mobileImageUrl} />
                    </div>
                    <div className="d-flex flex-column p-3 text-description">
                      <span className="product-number">{i.productNumber}</span>
                      {/* <a
                        href={`${i.link}`}
                        className="no-style-underline"
                      > */}
                      <Link to={"/products/" + i.slug}>
                        <h4 className="product-name">
                          {i.label} <span>({i.for})</span>
                        </h4>
                      </Link>
                      {/* </a> */}
                      <p className="product-description-banner">
                        {i.description}
                      </p>
                    </div>
                  </div>
                </StyleRoot>
              ) : null
            )}
            <div className="d-flex align-items-center justify-content-between bg-image">
              <Carousel controls={false} indicators={false}>
                {bottomSlider.map((i, index) =>
                  window.innerWidth > 767 ? (
                    (bottomSlider[index + increment] && index % 2 != 0) ||
                    index == 0 ? (
                      <Carouselitem
                        index={index != 0 ? (index = index + 1) : index}
                        mobile={false}
                        key={index}
                        bottomslider={bottomSlider}
                      />
                    ) : null
                  ) : (
                    <Carouselitem
                      index={index}
                      mobile={true}
                      key={index}
                      bottomslider={bottomSlider}
                    />
                  )
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecarousel;
