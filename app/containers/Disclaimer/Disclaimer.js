import React, { useState } from "react";
import "./Disclaimer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Button, Form } from 'react-bootstrap';
import Assets from "../../lib/constants/assets";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

function Disclaimer(props) {
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
    cookies.set('DisclaimerAgreement', 'Accepted', { expires: new Date(Date.now() + (86400000 * 30)) });
    history.push('/')
  }
  const { trans } = props;
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
            {trans("DISCLAIMER_TITLE")}
          </h2>
          <p className='disclaimer-desctext'>
            {trans("DISCLAIMER_DESC")}
          </p>
          <Form>
            <Form.Group controlId="formBasicCheckbox" className='text-center'>
              <label className="checkbox-style">
                <input type="checkbox" onClick={checkAcceptDisclaimer} />
                <span className="checkmark"></span> <span className="checkbox-text">{trans("DISCLAIMER_CHECKBTN")}</span>
              </label>
              {/* <Form.Check type="checkbox" label="I Accept" onClick={checkAcceptDisclaimer} /> */}
            </Form.Group>
            <div className='disclaimer-agreebtn'>
              <Button variant="dark" disabled={disabled} onClick={acceptDisclaimer} className="col-3 btn-lg">
                {trans("DISCLAIMER_DONEBTN")}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Disclaimer;
