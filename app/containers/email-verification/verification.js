import React, { useState, useEffect, useRef } from 'react';

import { verifyUser } from '../../redux/actions/verifyuser';
import { connect } from 'react-redux';
import "./verification.scss";
import { Container, Row, Col } from "react-bootstrap";
import ToastMessage from '../../components/Toast/CustomToast';

function EmailVerification(props) {
  const [invalidStatus, setInvalidStatus] = useState(false);

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);

    if (parsed.token) {
      props.verifyUser(parsed.token, props.history);
    } else {
      setInvalidStatus(true);
    }

  }, []);

  const { trans } = props;
  const messageProp = props.verifyStatus !== undefined ? props.message : invalidStatus && trans("invalid_request");

  return (
    <div className="email-verification-main">
      <Container className="email-verification-container">
        <Row>
          <Col>
            {(invalidStatus == false && props.verifyStatus == undefined) &&
              <h1 className="congratulations-text">{trans("please_wait")}</h1>
            }
            {messageProp &&
              <ToastMessage message={messageProp} />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser: (verifyUserValues, history) => { dispatch(verifyUser(verifyUserValues, history)) }
  }
}

const mapStateToProps = (state) => {
  return {
    verifyStatus: state.VerifyUserReducer.VerifyUserStatus,
    message: state.VerifyUserReducer.message
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);