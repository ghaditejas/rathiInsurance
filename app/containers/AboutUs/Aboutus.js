import React from "react";
import "./aboutus.scss";

import { Container, Row, Col } from "react-bootstrap";
import Assets, { VideoSource } from "../../lib/constants/assets";
import { AboutUs } from "../../../dummyJson";

function Aboutus(props) {
  const { trans } = props;

  return (
    <div className="about-us-wrapper" id="aboutUs">
      <Container>
        <Row className="d-flex justify-content-between mb-4">
          <Col className="col-md-3 col-sm-12 about-us-heading-wrapper">
            <div className="about-us-text">
              {/* <img src={Assets.AboutusImage} /> */}
              <h2 className="heading">{trans("lets_know")}</h2>
              <h1 className="heading">{trans("about_us")}</h1>
            </div>
          </Col>
          <Col md={8} sm={12} className="description-section">
            <div
              dangerouslySetInnerHTML={{ __html: props.AboutUs.aboutUSDescription }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="d-flex align-items-center justify-content-center flex-column align-main-content"
          >
            <img src={Assets.BuildImage} />
            <h3 className="image-text">{trans("build")}</h3>
            <p className="image-description text-center">{trans("build_text")}</p>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="d-flex align-items-center flex-column align-main-content"
          >
            <img src={Assets.PreventImage} />
            <h3 className="image-text">{trans("prevent")}</h3>
            <p className="image-description text-center">
              {trans("prevent_text")}
            </p>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="d-flex align-items-center justify-content-center flex-column align-main-content-last"
          >
            <img src={Assets.RecoverImage} />
            <h3 className="image-text">{trans("recover")}</h3>
            <p className="image-description text-center">{trans("recover_text")}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} id="videoSection">
            <div>
              <video
                id="awardVideo"
                width="100%"
                height="100%"
                poster={Assets.VideoCover}
                controls
              >
                <source
                  src={VideoSource}
                  type="video/mp4"
                />
                <source
                  src={VideoSource}
                  type="video/ogg"
                />
                {trans("no_support")}
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
