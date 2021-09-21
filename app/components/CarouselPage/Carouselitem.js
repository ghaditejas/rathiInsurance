import React, { useState } from "react";
import "./homecarousel.scss";
import Assets from "../../lib/constants/assets";

import {
  Carousel,
  Item,
  Caption,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function Carouselitem(props) {
  const index = props.index;
  const bottomSlider = props.bottomslider;
  const activeClass = props.className;
  const mobile = props.mobile;
  // const [active, setActiveIndex] = useState(0);

  return (
    // <Container>
    <Carousel.Item className={`${activeClass} slidePadding`}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column carousel-item-align">
          {/* <div className='col-xs-4'> */}
          <h4 className="carousel-item1 bottom-carousel-heading">
            <a href={bottomSlider[index]['link']} target="_blank" className="no-style-underline">{bottomSlider[index] ? bottomSlider[index]['label'] : null}{" "}</a>
          </h4>
          <p className="carousel-item2 text-description">
            {bottomSlider[index] ? bottomSlider[index]["description"] : null}
          </p>
          {/* </div> */}
        </div>
        {mobile ? null :
          <div className="d-flex flex-column carousel-item-align">
            <h4 className="carousel-item1 bottom-carousel-heading">
              <a href={bottomSlider[index + 1]['link']} target="_blank" className="no-style-underline">{bottomSlider[index + 1] ? bottomSlider[index + 1]['label'] : ""}{" "}</a>
            </h4>
            <p className="carousel-item2 text-description">
              {bottomSlider[index + 1]
                ? bottomSlider[index + 1]["description"]
                : ""}
            </p>
          </div>
        }
      </div>
    </Carousel.Item>
    // </Container>
  );
}

export default Carouselitem;
