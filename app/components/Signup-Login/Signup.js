import React, { useState, useEffect } from "react";
import "./signup-login.scss";

import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import Assets, { VideoSource, RedirectUrl } from "../../lib/constants/assets";
import { fadeOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { connect } from "react-redux";

import { signUpValidate } from "../HookValidation/FormValidationRules";
import useForm from "../HookValidation/UseForm";
// import useAutoPlay from "../HookValidation/UseAutoPlay";
import { signupAction, resetSignupError } from "../../redux/actions/signup";

function SignupForm(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  // const autoPlayStatus = useAutoPlay();

  const gotoLogin = () => {
    props.history.push("/login");
  };

  const styles = {
    fadeOutRight: {
      animation: "9s",
      animationName: Radium.keyframes(fadeOutRight, "fadeOutRight"),
      opacity: 0,
    },
  };

  useEffect(() => {
    if (props.message) {
      setShow(true);
      setMessage(props.message);
      props.resetSignupError();
    }
    if (props.Signup.signup.status === "00") {
      resetForm();
    }
  });

  const signUp = () => {
    let params = {
      email: values.email,
      mobile: +values.phoneNo,
      countryCode: `+${values.countryCode}`,
      name: values.fullName,
      password: window.btoa(values.password),
      requestFrom: "web",
      deviceDetails: {
        osName: "window10",
        buildId: 1001,
      },
      languageCode: "",
    };

    let apiData = {
      params: params,
      history: props.history,
      pathToNavigate: "/login",
    };
    props.signupAction(apiData);
  };


  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(signUpValidate, props.trans, signUp);
  const { trans } = props;

  return (
    <StyleRoot>
      <div className="main-wrapper">
        <div className="signup-container-wrapper">
          <Container>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <div className="form-wrapper">
                  {show ? (
                    <Toast
                      // onClose={() => {
                      //   setShow(false);
                      //   setMessage("");
                      // }}
                      show={show}
                    >
                      <Toast.Body bsPrefix="toast-content text-white">
                        {message}
                      </Toast.Body>
                    </Toast>
                  ) : null}
                  <div className="form-heading">
                    <h1>
                      {trans("signup")}{" "}
                      <span>
                        /
                        <a href="javascript:void(0)" onClick={gotoLogin}>
                          {" "}
                          {trans("login")}
                        </a>
                      </span>
                    </h1>
                  </div>
                  <div className="form-detail">
                    <Form onSubmit={handleSubmit} className="text-white">
                      <Form.Group controlId="formGroupName">
                        <Form.Label>{trans("fullname")}</Form.Label>
                        <Form.Control
                          className={
                            errors.fullName
                              ? values.fullName !== "" &&
                                values.fullName !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.fullName !== "" &&
                                values.fullName !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="text"
                          name="fullName"
                          onChange={handleChange}
                          value={values.fullName || ""}
                          placeholder={trans("fullname_placeholder")}
                          maxLength="100"
                        />
                        {errors.fullName && (
                          <p className="invalid-login">{errors.fullName}</p>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>{trans("email")}</Form.Label>
                        <Form.Control
                          className={
                            errors.email
                              ? values.email !== "" &&
                                values.email !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.email !== "" &&
                                values.email !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="email"
                          name="email"
                          autoComplete='off'
                          onChange={handleChange}
                          value={values.email || ""}
                          placeholder={trans("email_placeholder")}
                          maxLength="50"
                        />
                        {errors.email && (
                          <p className="invalid-login">{errors.email}</p>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupCountryCode">
                        <Form.Label>{trans("country_code")}</Form.Label>
                        <Form.Control
                          className={
                            errors.countryCode
                              ? values.countryCode !== "" &&
                                values.countryCode !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.countryCode !== "" &&
                                values.countryCode !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="text"
                          name="countryCode"
                          onChange={handleChange}
                          value={values.countryCode || ""}
                          placeholder={trans("country_code_placeholder")}
                          maxLength="4"
                        />
                        {errors.countryCode && (
                          <p className="invalid-login">{errors.countryCode}</p>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupPhone">
                        <Form.Label>{trans("phone_number")}</Form.Label>
                        <Form.Control
                          className={
                            errors.phoneNo
                              ? values.phoneNo !== "" &&
                                values.phoneNo !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.phoneNo !== "" &&
                                values.phoneNo !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="text"
                          name="phoneNo"
                          onChange={handleChange}
                          value={values.phoneNo || ""}
                          placeholder={trans("phone_number_placeholder")}
                          maxLength="15"
                        />
                        {errors.phoneNo && (
                          <p className="invalid-login">{errors.phoneNo}</p>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Label>{trans("password")}</Form.Label>
                        <Form.Control
                          className="form-input-text"
                          className={
                            errors.password
                              ? values.password !== "" &&
                                values.password !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.password !== "" &&
                                values.password !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="password"
                          name="password"
                          onChange={handleChange}
                          value={values.password || ""}
                          placeholder={trans('password_placeholder')}
                          minLength="8"
                          maxLength="30"
                        />
                        {errors.password && (
                          <p className="invalid-login">{errors.password}</p>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupConfirmPassword">
                        <Form.Label>{trans("confirm_password")}</Form.Label>
                        <Form.Control
                          className="form-input-text"
                          className={
                            errors.confirmPassword
                              ? values.confirmPassword !== "" &&
                                values.confirmPassword !== undefined
                                ? "is-invalid input-text-active form-input-text"
                                : "is-invalid form-input-text"
                              : values.confirmPassword !== "" &&
                                values.confirmPassword !== undefined
                                ? "input-text-active form-input-text"
                                : "form-input-text"
                          }
                          type="password"
                          name="confirmPassword"
                          onChange={handleChange}
                          value={values.confirmPassword || ""}
                          placeholder={trans('confirm_password_placeholder')}
                          minLength="8"
                          maxLength="30"
                        />
                        {errors.confirmPassword && (
                          <p className="invalid-login">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group
                        id="formGridCheckbox"
                        className="d-flex form-checkbox"
                      >
                        <Form.Check
                          className=""
                          className={
                            errors.termsCondition
                              ? "is-invalid form-terms-conditions"
                              : "form-terms-conditions"
                          }
                          type="checkbox"
                          name="termsCondition"
                          value="Y"
                          onChange={handleChange}
                          label={trans('terms_condition_label')}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Form.Label>
                          <a
                            href={RedirectUrl + "term-and-conditions/"}
                            target="_blank"
                          >
                            {trans("terms_condition_link")}
                          </a>
                        </Form.Label>
                        {errors.termsCondition && (
                          <p className="invalid-login">
                            {errors.termsCondition}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="signup-button">
                        <Button variant="dark" type="submit" className="btn-lg">
                          {trans("signup")}
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="signup-video">
                  <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay={false}
                    loop
                  >
                    <source src={VideoSource} type="video/mp4" />
                    {trans("no_support")}
                  </video>
                  <div className="overlay-image" style={styles.fadeOutRight}>
                    <img className="w-100" src={Assets.VideoOverlay} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </StyleRoot>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    Signup: state.signUpReducer,
    message: state.signUpReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupAction: (params) => {
      dispatch(signupAction(params));
    },
    resetSignupError: () => {
      dispatch(resetSignupError());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
