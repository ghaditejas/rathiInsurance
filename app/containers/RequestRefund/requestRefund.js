import React, { useState, useEffect, useRef } from 'react';
import "./requestRefund.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form,Modal
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { requestRefund } from "../../redux/actions/requestRefund";

function RequestRefund(props) {
  const [show, setShow] = useState(false);
  let UserInfo = JSON.parse(localStorage.getItem("User"));
  const requestRefund = () => {
    let method = 'PATCH'
    console.log('orderId',props.orderId)
    let apiData = {
      params: {
        orderId:props.orderId,
        userId: UserInfo.uuid
      },
    };
    props.requestRefund(apiData, method);
  };
  const goBack = () => {
    setShow(false)
  }
  return (
    <Modal
    show={show}
    onHide={props.onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header  className='borderrem'>
    <h3>Are you sure you want to refund this order?<br/>
                  Your order will be cancelled.</h3>
    </Modal.Header>
    <Modal.Body className="modal-body-content">
    <div className="request-refund-main">
      <div className="request-refund-container">
        <Row>
          <Col xl={12}>
            <Form>
              <Form.Group className="button-align">
                <Button
                  className="btn btn-dark" onClick={requestRefund}>
                  Yes, continue
                </Button>
                <Button
                  className="btn btn-dark" onClick={goBack}>
                  No, go back
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
    </Modal.Body>
  </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestRefund: (params, method) => {
      dispatch(requestRefund(params, method));
    }
  };
};

export default connect(null,mapDispatchToProps)(RequestRefund);
