import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileapp.scss";
import { Container, Row, Col } from "react-bootstrap";
import { MobileAppDescription } from '../../../dummyJson';
import { Assets } from "../../lib/constants/assets";

function MobileSection(props) {
  const { trans } = props;
  console.log(props);
  // console.log(Assets.MobileApp, Assets.AppStore, Assets.PlayStore);
  return (
    <div className="mobile-app-wrapper" id="mobile_app">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="position-relative">
            <div className="d-flex justify-content-center mobile-app-image-container">
              <img src={Assets.MobileApp} className="mobile-app-image" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="app-description">
            <Row>
              <div className="title-container">
                <h2 className="heading">{trans("mobile_application")}</h2>
                <h1 className="heading">{trans("dipulse")}</h1>
                <p className="mobile-app-description pt-2">{props.MobileAppDescription.description}</p>
              </div>
            </Row>
            <Row className="mobile-app-description-container">
              <a href={props.MobileAppDescription.appStoreLink} target="_blank"> <img src={Assets.AppStore} className="app-store-image" /> </a> &nbsp; &nbsp;
              <a href={props.MobileAppDescription.playsStoreLink} target="_blank"><img src={Assets.PlayStore} className="play-store-image" /></a>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MobileSection;
