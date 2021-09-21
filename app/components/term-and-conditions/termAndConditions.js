import React, { useState, useEffect } from "react";
import "./termAndConditions.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { TermsConditionsDetail } from "../../../dummyJson";
import Address from "../Address/Address";
import { connect } from "react-redux";
function TermAndConditions(props) {
  return (
    <div className="term-And-conditions">
      <Container>
        <Row>
         <Col lg={12}>
            <div 
              dangerouslySetInnerHTML={{ __html:props.homepage.TermsConditionsDetail &&  props.homepage.TermsConditionsDetail.termsConditionDescription }}
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
)(TermAndConditions);