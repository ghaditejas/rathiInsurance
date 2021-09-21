import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { addAddressValidation } from "../../components/HookValidation/FormValidationRules";
import useForm from "../../components/HookValidation/UseForm";

// import { contactUs, resetContactStatus } from "../../redux/actions/index";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./cartAddress.scss";
import { fetchAddress } from "../../redux/actions/fetchAddress";
import { addAddress } from "../../redux/actions/addAddress";
import { deleteAddress } from '../../redux/actions/deleteAddress'

function CartAddress(props) {
  // console.log("CartAddress props==>", props)
  let { trans, history } = props
  let [showAddressFrom, SetShowAddressFrom] = useState(false);
  let UserInfo = JSON.parse(localStorage.getItem("User"));

  let [selectedAddress, setSelectedAddress] = useState(0);
  let [shipDiffAddress, setShipDiffAddress] = useState(false);
  let [selectedAddressType, setSelectedAddressType] = useState("Home");
  let [isEdited, setIsEdited] = useState(false)

  let addressTypes = [trans("home"), trans("work"), trans("other")];

  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      history.replace("/login");
    }

    if (UserInfo) {
      props.fetchAddress(UserInfo.uuid);
    }
  }, []);

  useEffect(() => {
    if (props.Address.length < 1) {
      SetShowAddressFrom(true)
    } else {
      SetShowAddressFrom(false)
    }
  }, [props.Address])

  const addAddress = () => {
    let method = 'POST'
    let apiData = {
      params: {
        userId: UserInfo.uuid,
        IsResidentialAddress: true,
        isPrimary: true,
        isActive: true,
        addressType: selectedAddressType,
        address: {
          name: UserInfo.name,
          mobileNumber: values.phoneNo,
          pinCode: values.postCode,
          houseNumber: values.houseNo,
          landmarK: values.landmark,
          city: values.city,
          country: values.country,
        },
      },
    };

    if (isEdited) {
      apiData.params.addressId = values.addressId
      method = 'PATCH'
    }

    props.addAddress(apiData, method);
    SetShowAddressFrom(false);
    if (shipDiffAddress) {
      setShipDiffAddress(false);
    }
    setIsEdited(false)
  };

  function editAddress(address, index) {
    values.phoneNo = address.address.mobileNumber;
    values.postCode = address.address.pinCode;
    values.houseNo = address.address.houseNumber;
    values.landmark = address.address.landmarK;
    values.city = address.address.city;
    values.country = address.address.country;
    values.addressId = address.addressId
    setIsEdited(true)
    setSelectedAddressType(address.addressType);
    SetShowAddressFrom(true);
  }

  function removeAddress(address, index) {
    let apiData = {
      params: {
        userId: UserInfo.uuid,
        addressId: address.addressId
      },
    };
    props.deleteAddress(apiData)
    setSelectedAddress(0);
  }
  function cancelAddress(){
    resetForm();
    SetShowAddressFrom(false);
  }
  function selectAddress(address, index) {
    setSelectedAddress(index);
  }

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    addAddressValidation,
    trans,
    addAddress
  );

  return (
    <div>
      {showAddressFrom ? (
        <div class="cart-address-form">
          <div className="form-container">
            <div className="form-wrapper">
              <div>
                <h1>{trans('address_form')}</h1>
              </div>
              <div className="form-detail">
                <Form onSubmit={handleSubmit}>
                  {/* <Form.Group
                    className="form-entity form-group"
                    controlId="formGroupApartment"
                  >
                    <Form.Control
                      className={
                        errors.apartment
                          ? values.apartment !== "" &&
                            values.apartment !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.apartment !== "" &&
                            values.apartment !== undefined
                          ? "input-text-active form-input-text"
                          : "form-input-text"
                      }
                      type="text"
                      placeholder="Apartment / Block / Unit"
                      name="apartment"
                      value={values.apartment || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.apartment && (
                      <p className="invalid-login">{errors.apartment}</p>
                    )}
                  </Form.Group> */}
                  <Form.Group
                    className="form-entity form-group half-width padding-right"
                    controlId="formGroupHouseNo"
                  >
                    <Form.Control
                      className={
                        errors.houseNo
                          ? values.houseNo !== "" &&
                            values.houseNo !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.houseNo !== "" &&
                            values.houseNo !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      placeholder="House Number / Block / Unit"
                      name="houseNo"
                      value={values.houseNo || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.houseNo && (
                      <p className="invalid-login">{errors.houseNo}</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-entity form-group half-width  padding-left"
                    controlId="formGroupLandmark"
                  >
                    <Form.Control
                      className={
                        errors.landmark
                          ? values.landmark !== "" &&
                            values.landmark !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.landmark !== "" &&
                            values.landmark !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      placeholder="landmark address / landmark Number"
                      name="landmark"
                      value={values.landmark || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.landmark && (
                      <p className="invalid-login">{errors.landmark}</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-entity form-group half-width padding-right"
                    controlId="formGroupCity"
                  >
                    <Form.Control
                      className={
                        errors.city
                          ? values.city !== "" && values.city !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.city !== "" && values.city !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      placeholder="Town / City"
                      name="city"
                      value={values.city || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.city && (
                      <p className="invalid-login">{errors.city}</p>
                    )}
                  </Form.Group>
                  {/* <Form.Group className="form-entity form-group half-width  padding-left">
                      <Dropdown className="country-dropdown">
                          <Dropdown.Toggle variant="danger" id="dropdown-basic">
                          Country
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>England</Dropdown.Item>
                            <Dropdown.Item>French</Dropdown.Item>
                            <Dropdown.Item>Germany</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  </Form.Group> */}
                  <Form.Group
                    className="form-entity form-group half-width padding-left"
                    controlId="formGroupCountry"
                  >
                    <Form.Control
                      className={
                        errors.country
                          ? values.country !== "" &&
                            values.country !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.country !== "" &&
                            values.country !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={values.country || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.country && (
                      <p className="invalid-login">{errors.country}</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-entity form-group  half-width padding-right"
                    controlId="formGroupPostCode"
                  >
                    <Form.Control
                      className={
                        errors.postCode
                          ? values.postCode !== "" &&
                            values.postCode !== undefined
                            ? "is-invalid input-text-active form-input-text"
                            : "is-invalid form-input-text"
                          : values.postCode !== "" &&
                            values.postCode !== undefined
                            ? "input-text-active form-input-text"
                            : "form-input-text"
                      }
                      type="text"
                      placeholder="Postcode "
                      name="postCode"
                      value={values.postCode || ""}
                      onChange={handleChange}
                      maxLength="50"
                    />
                    {errors.postCode && (
                      <p className="invalid-login">{errors.postCode}</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="form-entity form-group  half-width padding-left"
                    controlId="formGroupPhoneNo"
                  >
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
                      placeholder="Phone"
                      name="phoneNo"
                      value={values.phoneNo || ""}
                      maxLength="50"
                      onChange={handleChange}
                    />
                    {errors.phoneNo && (
                      <p className="invalid-login">{errors.phoneNo}</p>
                    )}
                  </Form.Group>
                  {addressTypes.map((val, index) => (
                    <Form.Group
                      className="form-entity form-group width-33 padding-right"
                      controlId="formGroupAddressType"
                    >
                      <div className="select-address-Type">
                        <label
                          className={
                            val === selectedAddressType
                              ? "select-type radio-btn active"
                              : "select-type radio-btn non-active"
                          }
                          onClick={() => setSelectedAddressType(val)}
                        >
                          {val}
                        </label>
                      </div>
                    </Form.Group>
                  ))}

                  {/* <Form.Group
                    controlId="formBasicCheckbox"
                    className="text-center form-entity form-group half-width padding-right"
                  >
                    <label className="checkbox-style">
                      <input type="checkbox" />
                      <span className="checkmark" />{" "}
                      <span className="checkbox-text">
                        Ship to a different address?
                      </span>
                    </label>
                  </Form.Group> */}
                  {/* <Form.Check type="checkbox" label="I Accept" onClick={checkAcceptDisclaimer} /> */}

                  <Form.Group
                    controlId="formBasicCheckbox"
                    className="text-center form-entity form-group half-width padding-left"
                  >
                    <label className="checkbox-style">
                      <input type="checkbox" />
                      <span className="checkmark" />{" "}
                      <span className="checkbox-text">
                        Order notes (optional)
                      </span>
                    </label>
                    {/* <Form.Check type="checkbox" label="I Accept" onClick={checkAcceptDisclaimer} /> */}
                  </Form.Group>
                  <Form.Group className="form-entity form-group">
                    <Form.Control
                      as="textarea"
                      maxLength="180"
                      placeholder="Notes about your order"
                      name="note"
                      className="form-input-textarea"
                    />
                  </Form.Group>
                  <Form.Group className="button-align d-flex justify-content-center">
                    <Button variant="dark" type="submit" >
                      {trans("save")}
                    </Button>
                    <Button className="btn btn-outline-cancel" onClick={()=>cancelAddress()} >
                      {trans("cancel")}
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <div class="cart-address-container">
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="delivery-address">
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    {trans('Select_Delivery_Address')}
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6} className="add-new-address">
                    <Link
                      onClick={() => {
                        resetForm();
                        SetShowAddressFrom(true);
                      }}
                    >
                      <div>
                        <span className="add-new-address-underline">
                        +{" "}
                          {trans('Add_New_Address')}
                        </span>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Col>
              {props.Address.map((val, index) => (
                <Col lg={12} md={12} sm={12} xs={12} className="detail-address">
                  <Row>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="address-operations"
                    >
                      <div className="select-address-main">
                        <label
                          class={
                            index === selectedAddress
                              ? "select-address radio-btn active"
                              : "select-address radio-btn non-active"
                          }
                          onClick={() => selectAddress(val, index)}
                        >
                          {val.address.name}
                        </label>
                      </div>
                      <div className="address-type">
                        <Button
                          className="button-position"
                          variant="outline-primary border-primary"
                        >
                          {val.addressType}
                        </Button>
                      </div>
                      <div class="remove-button">
                        <Button
                          className="transferent-button"
                          onClick={() => removeAddress(val, index)}
                        >
                          <FontAwesomeIcon icon={faTimes} /> <span>{trans('Remove')}</span>
                        </Button>
                      </div>
                      <div class="edit-button">
                        <Button
                          className="transferent-button"
                          onClick={() => editAddress(val, index)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> <span>{trans('Edit')}</span>
                        </Button>
                      </div>
                    </Col>
                    <Col lg={10} md={10} sm={10} xs={12} className="address">
                      <p>
                        {`${val.address.houseNumber}, ${val.address.landmarK}, ${
                          val.address.city
                          }`}
                      </p>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="contact-number"
                    >
                      <span className="contact-number-text">Contact Number</span>
                      <span className="contact-number">
                        {val.address.mobileNumber}
                      </span>
                    </Col>
                  </Row>
                </Col>
              ))}
              <Form.Group
                controlId="formBasicCheckbox"
                className="text-center form-entity form-group half-width padding-right"
              >
                <label className="checkbox-style" style={{ paddingTop: "20px" }}>
                  <input
                    type="checkbox"
                    checked={shipDiffAddress}
                    onClick={() => setShipDiffAddress((p) => !p)}
                  />
                  <span className="checkmark" />{" "}
                  <span className="checkbox-text">
                    {trans('Ship_to_a_different_address')}
                  </span>
                </label>
                {/* <Form.Check type="checkbox" label="I Accept" onClick={checkAcceptDisclaimer} /> */}
              </Form.Group>
            </Row>
          </div>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Address: state.fetchAddressReducers.addresses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAddress: (params) => {
      dispatch(fetchAddress(params));
    },
    addAddress: (params, method) => {
      dispatch(addAddress(params, method));
    },
    deleteAddress: (params) => {
      dispatch(deleteAddress(params))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartAddress);
