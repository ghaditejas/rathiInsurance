import React, { useState, useEffect } from "react";
import "./signup-login.scss";

import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import Assets, { VideoSource } from "../../lib/constants/assets";
import { fadeOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { loginValidate } from "../HookValidation/FormValidationRules";
import useForm from "../HookValidation/UseForm";
// import useAutoPlay from "../HookValidation/UseAutoPlay";
import { loginAction, resetLoginError } from "../../redux/actions/login";

function LoginForm(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  // const autoPlayStatus = useAutoPlay();

  const gotoSignup = () => {
    props.history.push("/signup");
  };

  const styles = {
    fadeOutRight: {
      animation: "5s",
      animationName: Radium.keyframes(fadeOutRight, "fadeOutRight"),
      opacity: 0,
    },
  };

  const login = () => {
    let navigatedfrom = props.location.fromPath ? props.location.fromPath : '/';
    let apiData = {
      params: {
        email: values.email,
        password: window.btoa(values.password),
        requestFrom: "web",
        languageCode: "en",
      },
      history: props.history,
      pathToNavigate: navigatedfrom,
    };

    props.loginAction(apiData);
  };

  useEffect(() => {
    const { location } = props;
    if (location.state !== undefined) {
      setShow(true);
      setMessage(location.state.message);
      location.state = undefined;
    } else if (props.message) {
      setShow(true);
      setMessage(props.message);
      props.resetLoginError();
    }
  });

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    loginValidate,
    props.trans,
    login
  );
  const { trans } = props;

  return (
    <StyleRoot>
      <div className="main-wrapper">
        <div>{/* <Header /> */}</div>
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
                      {trans("login")}{" "}
                      <span>
                        /{" "}
                        <a href="javascript:void(0)" onClick={gotoSignup}>
                          {trans("signup")}
                        </a>
                      </span>
                    </h1>
                  </div>
                  <div className="form-detail">
                    <Form onSubmit={handleSubmit} className="text-white">
                      <Form.Group controlId="formGroupName">
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
                          type="text"
                          name="email"
                          autoComplete='off'
                          placeholder={trans("email_placeholder")}
                          onChange={handleChange}
                          value={values.email || ""}
                          maxLength="50"
                        />
                        {errors.email && (
                          <p className="invalid-login">{errors.email}</p>
                        )}
                      </Form.Group>
                      <Form.Group
                        controlId="formGroupPassword"
                        className="password-wrapper"
                      >
                        <Form.Label>{trans("password")}</Form.Label>
                        <Form.Control
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
                          name="password"
                          type="password"
                          placeholder={trans("password_placeholder")}
                          onChange={handleChange}
                          value={values.password || ""}
                          maxLength="30"
                        />
                        {errors.password && (
                          <p className="invalid-login">{errors.password}</p>
                        )}
                      </Form.Group>
                      <Form.Group className="forgot-link">
                        <Form.Label>
                          <Link to={'/forgot-password'} className="password-forget">
                            {trans("forgot_password")}
                          </Link>
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="signup-button">
                        <Button variant="dark" type="submit" className="btn-lg">
                          {trans("login")}
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

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (params) => {
      dispatch(loginAction(params));
    },
    resetLoginError: () => {
      dispatch(resetLoginError());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    message: state.loginReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
