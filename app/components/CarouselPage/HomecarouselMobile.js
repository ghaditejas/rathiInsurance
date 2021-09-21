import React, { useState } from "react";
// import "./homecarousel.scss";
import "./homecarouselmobile.scss";
import Assets from "../../lib/constants/assets";

import Carouselitem from "../../components/CarouselPage/Carouselitem";

import {
  Carousel,
  Item,
  Caption,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function HomecarouselMobile(props) {
    // console.log('Homecarousel props==>', props)
    const imgs = props.data.data;
    const bottomSlider = props.data.bottomSlider
    const [active, setActiveIndex] = useState(0);
    const increment = bottomSlider.length % 2 == 0 ? 2 : 1;
    return (
        <div className="carousel-container">
            {/* <img className="animated-stick" src={Assets.StickImage} /> */}
            <Carousel controls={false} activeIndex={active} indicators={false}>
                {imgs.map(i => (
                    <Carousel.Item>
                        <div className="wrap-img-div position-relative" >
                            <img
                                className="w-100"
                                src={i.silderMobileImageUrl}
                                alt="First slide"
                            />
                            <Container className='mw-100'>
                                <div className="text-image-wrapper position-absolute">
                                    <div className="text-image text-white">
                                        <h2 className='heading'>BUILD YOUR BODY</h2>
                                        <h1 className='heading'>PREVENT INJURIES</h1>
                                        <h1 className='heading'>RECOVER FASTER</h1>
                                        <Button
                                            className="button-position"
                                            variant="outline-success"
                                        > VIEW PRODUCTS
                      </Button>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </Carousel.Item>
                ))}
                <div className="caraousel-number">
                    <div className="number-container">
                        {imgs.map((_, index) => {
                            return (
                                <p
                                    className={active === index ? "active-index" : "inactive-index"}
                                    onClick={() => setActiveIndex(index)}>
                                    {(index + 1).toString().padStart(2, '0')}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="upcoming-activity">
                    <div className="d-flex justify-content-start first-bottom-index">
                        <div className="image-align">
                            <img src={props.data.latesUpdate.imageUrl} />
                        </div>
                        <div className="d-flex flex-column p-2 text-description">
                            <p className="product-number">01</p>
                            <p className="text-white product-name">
                                {props.data.latesUpdate.label} <span>({props.data.latesUpdate.for})</span>
                            </p>
                            <p className="product-description">
                                {props.data.latesUpdate.description}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between carousel-background">
                        <Carousel controls={false} indicators={false}>
                            {bottomSlider.map((i, index) => (
                                (bottomSlider[index + increment] && index % 2 != 0) || index == 0 ? <Carouselitem index={index != 0 ? index = index + 1 : index} key={index} bottomslider={bottomSlider} /> : null
                            ))}
                        </Carousel>
                    </div>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
        <div className="caraousel-number">
          <div className="number-container">
            {imgs.map((_, index) => {
              return (
                <p
                  className={
                    active === index ? "active-index" : "inactive-index"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </p>
              );
            })}
          </div>
        </div>
        <div className="upcoming-activity">
          <div className="d-flex justify-content-start first-bottom-index">
            <div className="image-align">
              <img src={props.data.latesUpdate.imageUrl} />
            </div>
            <div className="d-flex flex-column p-2 text-description">
              <p className="product-number">01</p>
              <p className="text-white product-name">
                {props.data.latesUpdate.label}{" "}
                <span>({props.data.latesUpdate.for})</span>
              </p>
              <p className="product-description">
                {props.data.latesUpdate.description}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between carousel-background">
            <Carousel controls={false} indicators={false}>
              {bottomSlider.map((i, index) =>
                (bottomSlider[index + increment] && index % 2 != 0) ||
                index == 0 ? (
                  <Carouselitem
                    index={index != 0 ? (index = index + 1) : index}
                    key={index}
                    bottomslider={bottomSlider}
                  />
                ) : null
              )}
            </Carousel>
          </div>
        </div>
      </Carousel>

      {/* <div className="align-social-media">
                <small className="text-spacing">FACEBOOK</small>
                <small className="text-spacing">INSTAGRAM</small>
                <small>YOUTUBE</small>
            </div> */}
    </div>
  );
}

export default HomecarouselMobile;
