
import React, { useState, useEffect } from 'react';
import '../ProductShowCase/NotifyMe.scss';
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import useForm from '../../components/HookValidation/UseForm';
import { NotifyMeValidate } from '../../components/HookValidation/FormValidationRules'
import { notifyEmail } from '../../redux/actions/notifyEmail'
import ToastMessage from '../../components/Toast/CustomToast';

function NotifyMePopUp(props) {
  const [toastMessage, setToastMessage] = useState(false);
  const [btnText, setBtnText] = useState('notify');
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

  const popupTranslation = trans('notify_product_popup', { returnObjects: true })

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    NotifyMeValidate,
    trans,
    submitEmail
  );

  useEffect(() => {
    if (props.resNotify.error && props.productId === props.resNotify.success.productId) {
      // setDisabled(false);
      setIsSuccess(false);
      setToastMessage(props.resNotify.error.message);
    } else if (props.resNotify.success && props.productId === props.resNotify.success.productId) {
      setBtnText('sent');
      setIsSuccess(true);
      // setDisabled(true);
      setToastMessage(props.resNotify.success.message);
    }
  }, [props.resNotify]);

  return (
    <>
      <Button className="add-to-cart" onClick={() => setNotifyForm(true)}>
        {trans('notify_me')}
      </Button>
      <Modal
        show={notifyForm}
        onHide={() => setNotifyForm(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='closeborderrem'>
          <h2>{popupTranslation.heading}</h2>
        </Modal.Header>
        <Modal.Body>
          {
            notifyForm &&
            <div className='Notifyme-popup-section'>
              <br />
              {toastMessage &&
                <ToastMessage message={toastMessage} isSuccess={isSuccess} />
              }
              {!isSuccess &&
                <Form onSubmit={handleSubmit} className='notifyme-form'>
                  <p>{popupTranslation.sub_heading}</p>
                  <Form.Group controlId="formGroupEmail">
                    {/* <Form.Label>{trans("email")}</Form.Label> */}
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
                      {popupTranslation.btn}
                    </Button>
                  </Form.Group>
                </Form>
              }
            </div>
          }
        </Modal.Body>
      </Modal>
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
)(NotifyMePopUp);