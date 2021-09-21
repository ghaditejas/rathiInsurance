import React, { useState, useEffect, useRef } from 'react';
import "./changePassword.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import useForm from "../../components/HookValidation/UseForm";
import { resetPasswordValidation } from "../../components/HookValidation/FormValidationRules";
import { resetPassword } from "../../redux/actions/index";
import { connect } from 'react-redux';
// import bcrypt from '../../assets/bcrypt.min';
import ToastMessage from '../../components/Toast/CustomToast';

const queryString = require('query-string');

function ChangePassword(props) {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, showToastError] = useState(false);
  const [showSucess, setSucess] = useState(false);
  const [message, setMessage] = useState(false);

  let parsed;
  // let hashedPassword;

  useEffect(() => {
    parsed = queryString.parse(props.location.search);
    const token = parsed.token;
    if (!parsed.token) {
      showToastError(true)
    }
    setLoading(true)
  });

  useEffect(() => {
    if (props.resResetPassword.resetStatus) {
      setShow(true);
      setSucess(false);
    }
    else if (props.resResetPassword.successMessage) {
      setShow(false);
      setSucess(true);
    }
    else if (props.resResetPassword.errorMessage) {
      setShow(true);
      setSucess(false)
      setMessage(props.resResetPassword.errorMessage);
    }
  }, [props.resResetPassword]);

  // const calcHash = () => {
  //   const salt = bcrypt.genSaltSync(10);
  //   hashedPassword = bcrypt.hashSync(values.newPassword, salt);
  // }

  const resetPassword = () => {
    // calcHash();
    const params = {
      token: parsed.token,
      // password: hashedPassword ? hashedPassword : values.newPassword,
      password: window.btoa(values.newPassword),
      languageCode: "en"
    };
    props.resetPassword(params);
  }
  const { trans } = props;
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(resetPasswordValidation, trans, resetPassword);


  return (
    <div className="change-password-main">
      <Container className="change-password-container">
        {show ?
          <ToastMessage message={message} />
          : null}
        {showSucess ?
          <ToastMessage message={props.resResetPassword.successMessage} isSuccess={true} />
          : null}
        {loading
          ? showToast ?
            <ToastMessage message={trans("invalid_token")} />
            : <Row>
              <Col>
                <div className="text-reset">
                  <h2>{trans("reset_your_password")}</h2>
                </div>
                {}
                < div className="form-detail" >
                  <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Group className="form-entity form-group">
                      <Form.Control
                        autoComplete="off"
                        disabled={showSucess
                          ? true
                          : false}
                        className={errors.newPassword
                          ? values.newPassword !== "" && values.newPassword !== undefined
                            ? 'is-invalid input-text-active form-input-text'
                            : 'is-invalid form-input-text'
                          : values.newPassword !== "" && values.newPassword !== undefined
                            ? 'input-text-active form-input-text'
                            : 'form-input-text'}
                        type="password"
                        name="newPassword"
                        maxLength={25}
                        value={values.newPassword}
                        onChange={handleChange}
                        placeholder={trans("new_password")} /> {errors.newPassword && (
                          <p className="invalid-feedback">{errors.newPassword}</p>
                        )}
                    </Form.Group>
                    <Form.Group className="form-entity">
                      <Form.Control
                        autoComplete="off"
                        disabled={showSucess
                          ? true
                          : false}
                        className={errors.confirmPassword
                          ? values.confirmPassword !== "" && values.confirmPassword !== undefined
                            ? 'is-invalid input-text-active form-input-text'
                            : 'is-invalid form-input-text'
                          : values.confirmPassword !== "" && values.confirmPassword !== undefined
                            ? 'input-text-active form-input-text'
                            : 'form-input-text'}
                        type="password"
                        name="confirmPassword"
                        maxLength={25}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        placeholder={trans("confirm_password")} /> {errors.confirmPassword && (
                          <p className="invalid-feedback">{errors.confirmPassword}</p>
                        )}
                    </Form.Group>
                    <Form.Group className="button-align">
                      <Button
                        disabled={showSucess
                          ? true
                          : false}
                        className="btn btn-dark"
                        type="submit">
                        {trans("reset_password")}
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          : null}
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (resetPasswordValues) => {
      dispatch(resetPassword(resetPasswordValues))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    resResetPassword: state.ResetPasswordReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
