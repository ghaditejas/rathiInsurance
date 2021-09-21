import React, { useState, useEffect, useRef } from 'react';
import "./ForgotPassword.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { forgotPasswordValidate } from "../HookValidation/FormValidationRules";
import useForm from "../HookValidation/UseForm";
import useAutoPlay from "../HookValidation/UseAutoPlay";
import { connect } from 'react-redux';
// import bcrypt from '../../assets/bcrypt.min';
import ToastMessage from '../../components/Toast/CustomToast';
import { forgotPassword } from '../../redux/actions/forgotPassword'

function ForgotPassword(props) {

  let { trans } = props;
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('submit');
  const [resMessage, setResMessage] = useState('');
  const [resIsSuccess, setResIsSuccess] = useState(false);

  const submitEmail = () => {
    let apiData = {
      email: values.email,
      languageCode: "en"
    }
    setDisabled(true);
    props.forgotPassword(apiData)
  }

  useEffect(() => {
    if (props.resForgotPassword.message) {
      setDisabled(true);
      setBtnText('done');
      setResMessage(props.resForgotPassword.message);
      setShow(true);
      setResIsSuccess(true);
    } else if (props.resForgotPassword.error) {
      setDisabled(false);
      setBtnText('submit');
      setResMessage(props.resForgotPassword.error);
      setShow(true);
      setResIsSuccess(false);
    }
  }, [props.resForgotPassword]);

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    forgotPasswordValidate,
    trans,
    submitEmail
  );

  return (
    <div className="forgot-password-main">
      <Container className="forgot-password-container">
        {show ? (
          <ToastMessage message={resMessage} isSuccess={resIsSuccess} />
        ) : null}
        <Row>
          <Col>
            <div className="text-email">
              <h2>{trans('email_placeholder')}</h2>
            </div>
            < div className="form-detail" >
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  {/* <Form.Label>{trans("email")}</Form.Label> */}
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
                    placeholder={trans('email_placeholder')}
                  />
                  {errors.email && (
                    <p className="invalid-login">{errors.email}</p>
                  )}
                </Form.Group>
                <Form.Group className="button-align">
                  <Button
                    className="btn btn-dark"
                    disabled={disabled}
                    type="submit">
                    {trans(btnText)}
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    resForgotPassword: state.forgotPasswordReducers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (params) => {
      dispatch(forgotPassword(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);