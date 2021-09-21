import React, { useState, useEffect } from "react";
import "./privacyPolicy.scss";
import { Container, Row, Col } from "react-bootstrap";
import Address from "../Address/Address";
import { PrivacyPolicyDetail } from "../../../dummyJson";
import { connect } from "react-redux";
function PrivacyPolicy(props) {
  const { trans } = props;
  return (
    <div className="privacy-policy">
      <Container>
        <Row>
          <Col lg={12}>
            <div 
              dangerouslySetInnerHTML={{ __html:props.homepage.PrivacyPolicyDetail &&  props.homepage.PrivacyPolicyDetail.privacyPolicyDescription }}
            />
          </Col>
        </Row>
      </Container> 
      <div className="address-container">
        <Row className="address">
          <Col lg={12}>
            <Address trans={props.trans}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
      homepage : state.HomePageReducer.homePageData,
  };
};

export default connect(
  mapStateToProps
)(PrivacyPolicy);