import React, { useState, useEffect, useRef } from 'react';
import "./warrantyActivation.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { warrantyActivationValidate } from "../../components/HookValidation/FormValidationRules";
import useForm from "../../components/HookValidation/UseForm";
import useAutoPlay from "../../components/HookValidation/UseAutoPlay";
import { connect } from 'react-redux';
// import bcrypt from '../../assets/bcrypt.min';
import ToastMessage from '../../components/Toast/CustomToast';
import i18n from "../../config/i18n_config";
import { forgotPassword } from '../../redux/actions/forgotPassword'
import { warrantyActivate } from '../../redux/actions/warrantyActivation'
import { countries } from '../../lib/country'
import { fetchAllProduct } from "../../redux/actions/fetchAllProducts";

function warrantyActivation(props) {

  let { trans } = props;
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState('SEND');
  const [resMessage, setResMessage] = useState('');
  const [resIsSuccess, setResIsSuccess] = useState(false);
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [product, setProduct] = useState('')
  const [country, setCountry] = useState('')
  const [sendNewsLetter, setSendNewsPaper] = useState(false)
  const [purchaseCountry, setPurchaseCountry] = useState('')
  const [whomPurchase, setWhomPurchase] = useState('')
  const [purchaseReason, setPurchaseReason] = useState([])
  const [whereSeeDipulse, setWhereSeeDipulse] = useState([])
  const [image, setImage] = useState([])
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    let apiData = {
      requestBody: null,
      url: "/shop/newproduct?languageCode=" + i18n.language + "&countryCode=ALL",
      method: "GET"
    }
    props.fetchAllProduct(apiData);
  }, [])

  useEffect(() => {
    if (props.ActivateStatus !== undefined) {

      props.resetContactStatus();
      if (props.contactStatus) {
        resetForm();
      }
      console.log("contact updated");
    }
  }, [props.contactStatus]);

  useEffect(() => {
    // console.log('props=====>', props.warrantyResponse)
    if (props.warrantyResponse) {
      setResMessage(props.warrantyResponse.message);
      setResIsSuccess(props.warrantyResponse.status);
      setShow(true);
      if (props.warrantyResponse.status) { setShowForm(false); }
    } else {
      setResMessage('');
      setResIsSuccess(false);
      setShow(false);
    }
  }, [props.warrantyResponse])

  const objToArray = (obj) => {
    const newArray = [];
    if (obj && Object.keys(obj).length > 0) {
      Object.keys(obj).map((key) => {
        if (obj[key] === true) {
          newArray.push(key);
        }
      });
    }
    return newArray;
  }

  const submitActivationForm = () => {
    const selectedFile = document.getElementById('myFile').files[0];
    const whereSeeDipulse = objToArray(values.whereSeeDipulse);
    const purchaseReason = objToArray(values.purchaseReason);
    var formdata = new FormData();
    formdata.append("firstName", values.firstName);
    formdata.append("lastName", values.lastName);
    formdata.append("address", values.address);
    formdata.append("gender", values.gender);
    formdata.append("age", values.age);
    formdata.append("userEmail", values.email);
    formdata.append("zipCode", values.zipCode);
    formdata.append("city", values.city);
    formdata.append("productName", values.product);
    formdata.append("country", values.country);
    formdata.append("retailerStore", values.retailerStore);
    formdata.append("purchaseCountry", values.purchaseCountry);
    formdata.append("purchaseDate", values.purchaseDate);
    formdata.append("vendorName", values.vendorName);
    formdata.append("purchasePrice", values.purchasePrice);
    formdata.append("purchasedFor", values.whomPurchase);
    formdata.append("sourceOfInfo", whereSeeDipulse);
    formdata.append("newsletter", values.sendNewsLetter === "yes" ? true : false);
    formdata.append("reasonForPurchase", purchaseReason);
    formdata.append("image", selectedFile);
    props.warrantyActivate(formdata);
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    warrantyActivationValidate,
    trans,
    submitActivationForm
  );

  const t = trans("warranty", { returnObjects: true });

  return (
    <div className="warranty-activation-main">
      <Container className="warranty-activation-container">
        {showForm ? (
          <Row>
            <Col>
              <div className="text-email">
                <h2>{trans('warranty_activation')}</h2>
                <h5>{t.thankyou}</h5>
                <p>{t.line1}</p>
                <p>{t.line2}</p>
                <p>{t.line3}</p>
                <p>{t.line4}</p>
              </div>
              < div className="form-detail" >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formGroupName">
                    <Form.Control
                      className={
                        errors.firstName
                          ? values.firstName !== "" &&
                            values.firstName !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.firstName !== "" &&
                            values.firstName !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={values.firstName || ""}
                      placeholder={trans("first_name")}
                      maxLength="100"
                    />
                    {errors.firstName && (
                      <p className="invalid-login">{errors.firstName}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupLastName">
                    <Form.Control
                      className={
                        errors.lastName
                          ? values.lastName !== "" &&
                            values.lastName !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.lastName !== "" &&
                            values.lastName !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={values.lastName || ""}
                      placeholder={trans("last_name")}
                      maxLength="100"
                    />
                    {errors.lastName && (
                      <p className="invalid-login">{errors.lastName}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    <label className="gender-style">{trans("gender")}</label>
                    <span className="checkmark">
                      <input type="radio" id="male" name="gender" value="male" />
                      <label className="gender-text" for="male">{trans("male")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="female" name="gender" value="female" />
                      <label className="gender-text" for="female">{trans("female")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="other" name="gender" value="other" />
                      <label className="gender-text" for="other">Other</label>
                    </span>
                    {errors.gender && (
                      <p className="invalid-login">{errors.gender}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    {/* <br /> */}
                    <label className="age-style">AGE</label>
                    <span className="checkmark">
                      <input type="radio" id="20 AND YOUNGER" name="age" value="20 AND YOUNGER" />
                      <label className="age-text" for="20 AND YOUNGER">20 AND YOUNGER</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="21-30" name="age" value="21-30" />
                      <label className="age-text" for="21-30">21-30</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="31-40" name="age" value="31-40" />
                      <label className="age-text" for="31-40">31-40</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="41-50" name="age" value="41-50" />
                      <label className="age-text" for="41-50">41-50</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="51-60" name="age" value="51-60" />
                      <label className="age-text" for="51-60">51-60</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="61 AND OLDER" name="age" value="61 AND OLDER" />
                      <label className="age-text" for="61 AND OLDER">61 AND OLDER</label>
                    </span>
                    {errors.age && (
                      <p className="invalid-login">{errors.age}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
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
                      onChange={handleChange}
                      value={values.email || ""}
                      placeholder={trans("email")}
                      maxLength="100"
                    />
                    {errors.email && (
                      <p className="invalid-login">{errors.email}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupAddress">
                    <Form.Control
                      className={
                        errors.address
                          ? values.address !== "" &&
                            values.address !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.address !== "" &&
                            values.address !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="address"
                      onChange={handleChange}
                      value={values.address || ""}
                      placeholder={trans("address")}
                      maxLength="100"
                    />
                    {errors.address && (
                      <p className="invalid-login">{errors.address}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupZipCode">
                    <Form.Control
                      className={
                        errors.zipCode
                          ? values.zipCode !== "" &&
                            values.zipCode !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.zipCode !== "" &&
                            values.zipCode !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="zipCode"
                      onChange={handleChange}
                      value={values.zipCode || ""}
                      placeholder={trans("zip_code")}
                      maxLength="100"
                    />
                    {errors.zipCode && (
                      <p className="invalid-login">{errors.zipCode}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupCity">
                    <Form.Control
                      className={
                        errors.city
                          ? values.city !== "" &&
                            values.city !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.city !== "" &&
                            values.city !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={values.city || ""}
                      placeholder={trans("city")}
                      maxLength="100"
                    />
                    {errors.city && (
                      <p className="invalid-login">{errors.city}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left">
                    <label className="drop-style">{trans("product")}</label>
                    <select style={{ color: "black" }} className="form-control" name="product" id="product" onClick={handleChange}>
                      {props.AllProduct.allProducts.map((value, index) => (
                        <option value={value.productName} key={index}>{value.productName}</option>
                      ))}
                    </select>
                    {errors.product && (
                      <p className="invalid-login">{errors.product}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left">
                    <label className="drop-style">{trans("country")}</label>
                    <select style={{ color: "black" }} className="form-control" name="country" id="country" onClick={handleChange}>
                      {countries.map((value, index) => (
                        <option value={value.label} key={index}>{value.label}</option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="invalid-login">{errors.country}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupStore">
                    <Form.Control
                      className={
                        errors.retailerStore
                          ? values.retailerStore !== "" &&
                            values.retailerStore !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.retailerStore !== "" &&
                            values.retailerStore !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="retailerStore"
                      onChange={handleChange}
                      value={values.retailerStore || ""}
                      placeholder={trans("retailer_store")}
                      maxLength="100"
                    />
                    {errors.retailerStore && (
                      <p className="invalid-login">{errors.retailerStore}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    <label className="radio-style">{trans("please_send_newsletter")}</label>
                    <span className="checkmark">
                      <input type="radio" id="yes" name="sendNewsLetter" value="yes" />
                      <label className="radio-text" for="yes">Yes</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="no" name="sendNewsLetter" value="no" />
                      <label className="radio-text" for="no">No</label>
                    </span>
                    {errors.sendNewsLetter && (
                      <p className="invalid-login">{errors.sendNewsLetter}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left">
                    <label className="drop-style">{trans("purchase_country")}</label>
                    <select style={{ color: "black" }} className="form-control" name="purchaseCountry" id="purchaseCountry" onClick={handleChange}>
                      {countries.map((value, index) => (
                        <option value={value.label} key={index}>{value.label}</option>
                      ))}
                    </select>
                    {errors.purchaseCountry && (
                      <p className="invalid-login">{errors.purchaseCountry}</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    controlId="formGroupDate">
                    <label style={{ width: "100%", textAlign: "left", fontFamily: "bebas neue", fontSize: "22px", color: "#0a0a0c" }}>
                      {trans("purchase_date")}
                    </label>
                    <Form.Control
                      className={
                        errors.purchaseDate
                          ? values.purchaseDate !== "" &&
                            values.purchaseDate !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.purchaseDate !== "" &&
                            values.purchaseDate !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="date"
                      style={{ width: "35%" }}
                      name="purchaseDate"
                      onChange={handleChange}
                      value={values.purchaseDate || ""}
                      placeholder={trans("purchase_date")}
                      maxLength="100"
                    />
                    {errors.purchaseDate && (
                      <p className="invalid-login align-left">{errors.purchaseDate}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupVendor">
                    <Form.Control
                      className={
                        errors.vendorName
                          ? values.vendorName !== "" &&
                            values.vendorName !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.vendorName !== "" &&
                            values.vendorName !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="vendorName"
                      onChange={handleChange}
                      value={values.vendorName || ""}
                      placeholder={trans("vendor_name")}
                      maxLength="100"
                    />
                    {errors.vendorName && (
                      <p className="invalid-login">{errors.vendorName}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupPrice">
                    <Form.Control
                      className={
                        errors.purchasePrice
                          ? values.purchasePrice !== "" &&
                            values.purchasePrice !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.purchasePrice !== "" &&
                            values.purchasePrice !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      name="purchasePrice"
                      onChange={handleChange}
                      value={values.purchasePrice || ""}
                      placeholder={trans("purchase_price")}
                      maxLength="100"
                    />
                    {errors.purchasePrice && (
                      <p className="invalid-login">{errors.purchasePrice}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    <label className="radio-style">{trans("dipulse_buy_question")}</label>
                    <span className="checkmark">
                      <input type="radio" id="Bought for myself" name="whomPurchase" value="Bought for myself" />
                      <label className="checkbox-text" for="Bought for myself">{trans("bought_for_myself")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="radio" id="Bought as gift" name="whomPurchase" value="Bought as gift" />
                      <label className="checkbox-text" for="Bought as gift">{trans("bought_as_gift")}</label>
                    </span>
                    {errors.whomPurchase && (
                      <p className="invalid-login">{errors.whomPurchase}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    <label className="checkbox-style">{trans("purchase_reason")}</label>
                    <span className="checkmark">
                      <input type="checkbox" id="build" parent={"purchaseReason"} name="build" value="build" />
                      <label className="checkbox-text" for="build">{trans("build")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="recover" parent={"purchaseReason"} name="recover" value="recover" />
                      <label className="checkbox-text" for="recover">{trans("recover")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="prevent" parent={"purchaseReason"} name="prevent" value="prevent" />
                      <label className="checkbox-text" for="prevent">{trans("prevent")}</label>
                    </span>
                    {errors.purchaseReason && (
                      <p className="invalid-login">{errors.purchaseReason}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="align-left" onClick={handleChange}>
                    <label className="checkbox-style">{trans("where_see_dipulse")}</label>
                    <span className="checkmark">
                      <input type="checkbox" id="newspaper" parent={"whereSeeDipulse"} name="newspaper" value="Newspaper" />
                      <label className="checkbox-text" for="newspaper">{trans("news_paper")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="internet" parent={"whereSeeDipulse"} name="internet" value="Internet" />
                      <label className="checkbox-text" for="internet">{trans("internet")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="socialmedia" parent={"whereSeeDipulse"} name="socialmedia" value="Social media" />
                      <label className="checkbox-text" for="socialmedia">{trans("social_media")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="fair" parent={"whereSeeDipulse"} name="fair" value="Fair" />
                      <label className="checkbox-text" for="fair">{trans("fair")}</label>
                    </span>
                    <span className="checkmark">
                      <input type="checkbox" id="shop" parent={"whereSeeDipulse"} name="shop" value="Shop" />
                      <label className="checkbox-text" for="shop">{trans("shop")}</label>
                    </span>
                    {errors.whereSeeDipulse && (
                      <p className="invalid-login">{errors.whereSeeDipulse}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="button-align align-left">
                    <label for="fair">{trans("upload_instruction")}</label>
                    <input type="file" id="myFile" name="image" onChange={handleChange} />
                    {errors.image && (
                      <p className="invalid-login">{errors.image}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="button-align align-left">
                    <div className="flex-display">
                      <input type="checkbox" name="agreeToTerms" id="warranty-terms" value={values.agreeToTerms} onChange={handleChange} />
                      <label for="warranty-terms">{trans("agree_terms")}</label>
                    </div>

                    {errors.agreeToTerms && (
                      <p className="invalid-login">{errors.agreeToTerms}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="button-align text-center">
                    <Button
                      className="btn btn-dark"
                      disabled={!values.agreeToTerms}
                      type="submit">
                      {trans("send")}
                    </Button>
                  </Form.Group>

                </Form>
              </div>
            </Col>
          </Row>
        ) : null}
        {show ? (
          <ToastMessage message={resMessage} isSuccess={resIsSuccess} />
        ) : null}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    AllProduct: state.fetchAllProductReducers,
    geoLocationData: state.geoLocationReducer.geoLocationData,
    warrantyResponse: state.warrantyActivationReducers.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: (params) => {
      dispatch(fetchAllProduct(params));
    },
    warrantyActivate: (params) => {
      dispatch(warrantyActivate(params))
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(warrantyActivation);