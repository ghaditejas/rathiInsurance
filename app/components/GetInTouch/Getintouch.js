import React, { useState, useEffect, useRef } from "react";
import "./getintouch.scss";

import { Container, Row, Col, Button, Form, Toast } from 'react-bootstrap';
// import { FacebookLink, InstaLink, YoutubeLink } from '../../lib/constants/assets';
import Address from '../Address/Address';
import { validate } from '../HookValidation/FormValidationRules';
import useForm from '../HookValidation/UseForm';

import { contactUs, resetContactStatus } from "../../redux/actions/index";
import { connect } from "react-redux";

const GetInTouch = (props) => {
  // const scrollTop = () => {
  //   const elmnt = document.getElementById("homeCarousel");
  //   if (elmnt) {
  //     elmnt.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const [show, setShow] = useState(false);

  const contactUs = () => {
    const params = { name: values.fullName, email: values.email, message: values.message, phone: values.mobileNo, subject: "Contact Form" };
    props.contactUs(params);
  };

  useEffect(() => {
    if (props.contactStatus !== undefined) {
      const elmnt = document.getElementById("contactUs");
      setShow(true);
      // window.scroll({
      //   top:
      //     elmnt.offsetTop - document.getElementById("header").offsetHeight + 60,
      //   behavior: "smooth",
      // });
      props.resetContactStatus();
      if (props.contactStatus) {
        resetForm();
      }
      console.log("contact updated");
    }
  }, [props.contactStatus]);

  const { trans, message } = props;
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(validate, trans, contactUs);

  return (
    <div className="get-in-touch-wrapper" id="contactUs">
      <Container>
        <Row>
          {/* <Col
            xl={1}
            lg={1}
            md={1}
            className="d-flex align-items-center justify-content-center"
          > */}
          {/* <div className="align-social-media">
              <a href={FacebookLink}  className="text-spacing">FACEBOOK</a>
              <a href={InstaLink}  className="text-spacing">INSTAGRAM</a>
              <a href={YoutubeLink}  className="text-spacing">YOUTUBE</a>
            </div> */}
          {/* </Col> */}
          <div className="form-container">
            <div className="form-wrapper">
              <div className="text-white">
                {show ? <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                  <Toast.Body bsPrefix="toast-content">{message}</Toast.Body>
                </Toast> : null}
                <h1>{trans("get_in_touch")}</h1>
                <p className="form-heading-desription">
                  {trans("touch_descrp")}
                </p>
              </div>
              <div className="form-detail">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="form-entity">
                    <Form.Control className={errors.fullName ? values.fullName !== "" && values.fullName !== undefined ? 'is-invalid input-text-active form-input-text' : 'is-invalid form-input-text' : values.fullName !== "" && values.fullName !== undefined ? 'input-text-active form-input-text' : 'form-input-text'} type="text" placeholder={trans("fullname")} name="fullName" onChange={handleChange} value={values.fullName || ''} maxLength="50" />
                    {errors.fullName && (<p className="invalid-feedback">{errors.fullName}</p>)}
                  </Form.Group>
                  <Form.Group className="form-entity half-width mobileNo">
                    <Form.Control className={errors.mobileNo ? values.mobileNo !== "" && values.mobileNo !== undefined ? 'is-invalid input-text-active form-input-text' : 'is-invalid form-input-text' : values.mobileNo !== "" && values.mobileNo !== undefined ? 'input-text-active form-input-text' : 'form-input-text'} type="text" placeholder={trans("mobile_no")} name="mobileNo" onChange={handleChange} value={values.mobileNo || ''} maxLength="10" />
                    {errors.mobileNo && (<p className="invalid-feedback">{errors.mobileNo}</p>)}
                  </Form.Group>
                  <Form.Group className="form-entity half-width email">
                    <Form.Control className={errors.email ? values.email !== "" && values.email !== undefined ? 'is-invalid input-text-active form-input-text' : 'is-invalid form-input-text' : values.email !== "" && values.email !== undefined ? 'input-text-active form-input-text' : 'form-input-text'} type="email" placeholder={trans("email")} name="email" onChange={handleChange} value={values.email || ''} />
                    {errors.email && (<p className="invalid-feedback">{errors.email}</p>)}
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      maxLength="180"
                      placeholder={trans("enter_your_message")}
                      name="message"
                      onChange={handleChange}
                      value={values.message || ""}
                      className={
                        errors.message
                          ? values.message !== "" &&
                            values.message !== undefined
                            ? "is-invalid input-text-active form-input-textarea"
                            : "is-invalid form-input-textarea"
                          : values.message !== "" &&
                            values.message !== undefined
                            ? "input-text-active form-input-textarea"
                            : "form-input-textarea"
                      }
                    />
                    {errors.message && (
                      <p className="invalid-feedback">{errors.message}</p>
                    )}
                    <Form.Text className="text-muted1">
                      {Number(180 - (values.message ? values.message.length : 0))} {trans("characters_left")}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="button-align">
                    <Button variant="dark" type="submit" className="btn-lg">
                      {trans("send_message")}
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
          <Address AddressData={props.AddressData} trans={props.trans} selectedlangcode={props.selectedlangcode} />
          {/* <div className="text-white responsive-about-menu text-center d-none mt-3">
              <div className="about-list">
                <ul>
                  <li>FAQ</li>
                  <li>Warranty Activation Form</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="copyright text-white text-center mt-1">
                Copyright 2020 © diPulse
              </div>
            </div> */}
          {/* <Col
            xl={1}
            lg={1}
            md={1}
            className="back-sign d-flex justify-content-center flex-column"
          >
            <div className="inner">&nbsp;</div>
            <a onClick={scrollTop} className="back-to-top text-white">Back to top </a>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    contactUs: (contactUsValues) => {
      dispatch(contactUs(contactUsValues));
    },
    resetContactStatus: () => {
      dispatch(resetContactStatus());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    contactStatus: state.ContactUsReducer.contactStatus,
    message: state.ContactUsReducer.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetInTouch);
