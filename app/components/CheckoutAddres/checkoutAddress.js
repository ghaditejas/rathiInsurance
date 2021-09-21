import React, { useState } from "react";
import "./Disclaimer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Button, Form } from 'react-bootstrap';
import Assets from "../../lib/constants/assets";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

function Disclaimer() {
  let history = useHistory();
  const cookies = new Cookies();
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(true)
  const handleClose = () => {
    setShow(false)
    cookies.set('DisclaimerAgreement', 'Rejected');
  };
  const checkAcceptDisclaimer = () => {
    setDisabled(!disabled)
  };
  const acceptDisclaimer = () => {
    setShow(false);
    cookies.set('DisclaimerAgreement', 'Accepted');
    history.push('/')
  }

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(true)}
        dialogClassName="modal-main modal-dialog-centered"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className='borderrem' onClick={handleClose}></Modal.Header>
        <Modal.Body className="modal-body-content">
          <span className='disclaimer-logo'>
            <img src={Assets.LOGO} />
          </span>
          <h2 id="example-custom-modal-styling-title" className='disclaimer-text'>
            Disclaimer
          </h2>
          <p className='disclaimer-desctext'>
            diPulse is not a medical device and cannot be used to diagnose or treat injury or illness, it is designed for use by healthy individuals over 18 years of age.  Please read the Starter Guide prior to use. If you are in any doubt about your health, you should seek advice from your medical practitioner before using your diPulse product. By clicking the check box you agree to having read and understood this message and it will not appear again.
          </p>
          <Form>
            <Form.Group controlId="formBasicCheckbox" className='text-center'>
              <label className="checkbox-style">
                <input type="checkbox" onClick={checkAcceptDisclaimer} />
                <span className="checkmark"></span> <span className="checkbox-text">I ACCEPT</span>
              </label>
              {/* <Form.Check type="checkbox" label="I Accept" onClick={checkAcceptDisclaimer} /> */}
            </Form.Group>
            <div className='disclaimer-agreebtn'>
              <Button variant="dark" disabled={disabled} onClick={acceptDisclaimer}>
                Done
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Disclaimer;
