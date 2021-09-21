import React, { useState, useEffect } from 'react';
import './NotifyMe.scss';
import { Button, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import useForm from '../../components/HookValidation/UseForm';
import { NotifyMeValidate } from '../../components/HookValidation/FormValidationRules'
import { notifyEmail } from '../../redux/actions/notifyEmail'
import ToastMessage from '../../components/Toast/CustomToast';

function NotifyMe(props) {
  const [toastMessage, setToastMessage] = useState(false);
  // const [btnText, setBtnText] = useState('SUBSCRIBE NOW');
  const [isSuccess, setIsSuccess] = useState(false);
  const [notifyForm, setNotifyForm] = useState(false);
  
  const { trans } = props;
  const submitEmail = () => {
    let apiData = {
      email: values.email,
      productId: props.productId,
      currencyCode: props.currency.currencyCode
    }
    props.notifyEmail(apiData)
  }

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    NotifyMeValidate,
    trans,
    submitEmail
  );
  const popupTranslation = trans('notify_product_popup', { returnObjects: true })
  useEffect(() => {
    if (props.resNotify.error && props.productId === props.resNotify.success.productId) {
      // setDisabled(false);
      setIsSuccess(false);
      setToastMessage(props.resNotify.error.message);
    } else if (props.resNotify.success && props.productId === props.resNotify.success.productId) {
      // setBtnText('sent');
      setIsSuccess(true);
      // setDisabled(true);
      setToastMessage(props.resNotify.success.message);
    }
  }, [props.resNotify]);

  return (
    <>
      {
        !notifyForm ?
          <>
            <Button className="notify-me btn-dark" onClick={() => setNotifyForm(true)}>
              {trans('notify_me')}
            </Button>
          </> :
          <div className='Notifyme-section'>
            <br />
            {toastMessage &&
              <ToastMessage message={toastMessage} isSuccess={isSuccess} />
            }
            {!isSuccess &&
              <Form onSubmit={handleSubmit} className='notifyme-form'>
                <h2>{popupTranslation.heading}</h2>
                <p>{props.reason === "inventory" ? "Product Out of Stock":popupTranslation.sub_heading}</p>
                <Form.Group controlId="formGroupEmail">
                  {/* <Form.Label>{trans("email")}</Form.Label> */}
                  <Form.Label>{trans("email")}</Form.Label>
                  <Form.Control
                    className={
                      errors.email
                        ? values.email !== "" &&
                          values.email !== undefined
                          ? "is-invalid input-text-active"
                          : "is-invalid"
                        : values.email !== "" &&
                          values.email !== undefined
                          ? "input-text-active"
                          : ""
                    }
                    type="email"
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
                <Form.Group className="button-align">
                  <Button
                    className="btn btn-dark"
                    type="submit">
                    {trans(popupTranslation.btn)}
                  </Button>
                </Form.Group>
              </Form>
            }
          </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('notify me state value', state)
  return {
    resNotify: state.notifyEmailReducers,
    currency: state.countryCurrency.currency
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notifyEmail: (params) => {
      dispatch(notifyEmail(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotifyMe);