function validate(values, trans) {
  const emailRegex = /\S+@\S+\.\S+/;
  const mobileRegex = /^[0-9]+$/;
  // const nameRegex = /^[a-zA-Z ]+$/;
  const nameRegex = /^([a-zA-Z]+ ?)*$/;

  let errors = {};
  let t = trans('errors', { returnObjects: true });
  if (!values.email) {
    errors.email = t.email.required;
  } else if (!emailRegex.test(values.email)) {
    errors.email = t.email.invalid;
  }

  if (!values.fullName) {
    errors.fullName = t.fullname.required;
  } else if (!nameRegex.test(values.fullName)) {
    errors.fullName = t.fullname.invalid;
  }

  if (!values.mobileNo) {
    errors.mobileNo = t.mobile_number.required;
  } else if (!mobileRegex.test(values.mobileNo)) {
    errors.mobileNo = t.mobile_number.invalid;
  }

  if (!values.message) {
    errors.message = t.message.required;
  }

  return errors;
}

function loginValidate(values, trans) {
  const emailRegex = /\S+@\S+\.\S+/;
  let errors = {};
  let t = trans('errors', { returnObjects: true });
  if (!values.email) {
    errors.email = t.email.required;
  }
  else if (!emailRegex.test(values.email)) {
    errors.email = t.email.invalid;
  }

  if (!values.password) {
    errors.password = t.password.required;
  }

  return errors;
}

function signUpValidate(values, trans) {
  const emailRegex = /\S+@\S+\.\S+/;
  const mobileRegex = /^[0-9]+$/;
  // const nameRegex = /^[a-zA-Z ]+$/;
  const nameRegex = /^([a-zA-Z]+ ?)*$/;

  let errors = {};
  let t = trans('errors', { returnObjects: true });
  // console.log("signUpValidate -> t", t)
  if (!values.email) {
    errors.email = t.email.required;
  } else if (!emailRegex.test(values.email)) {
    errors.email = t.email.invalid;
  }

  if (!values.fullName) {
    errors.fullName = t.fullname.required;
  } else if (!nameRegex.test(values.fullName)) {
    errors.fullName = t.fullname.invalid;
  }

  if (!values.countryCode) {
    errors.countryCode = t.country_code.required;
  } else if (!mobileRegex.test(values.countryCode)) {
    errors.countryCode = t.country_code.invalid;
  }

  if (!values.phoneNo) {
    errors.phoneNo = t.mobile_number.required;
  } else if (!mobileRegex.test(values.phoneNo)) {
    errors.phoneNo = t.mobile_number.invalid;
  }

  if (!values.password) {
    errors.password = t.password.required;
  } else if (values.password.length < 8) {
    errors.password = t.password.minimum;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = t.confirm_password.required;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = t.password.not_matched;
  }

  if (!values.termsCondition) {
    errors.termsCondition = t.terms_condition.not_accepted;
  }

  return errors;
}

function validateCoupons(values, trans) {
  let errors = {};
  if (!values.couponCode) {
    errors.couponCode = "Coupon Code is required";
  }

  return errors;
}

function resetPasswordValidation(values, trans) {
  let errors = {};
  var passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,25})$/;
  if (!values.newPassword) {
    errors.newPassword = "Password is required";
  } else if (!passwordRegex.test(values.newPassword)) {
    errors.newPassword =
      "Your password should be alphanumeric with minimum length of 8.";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (!passwordRegex.test(values.confirmPassword)) {
    errors.confirmPassword =
      "Your password should be alphanumeric with minimum length of 8.";
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Confirm should be same as new password";
  }
  return errors;
}

function addAddressValidation(values) {
  const mobileRegex = /^[0-9]+$/;
  const nameRegex = /^([a-zA-Z]+ ?)*$/;
  let errors = {};

  if (!values.phoneNo) {
    errors.phoneNo = "Phone Number is required";
  } else if (!mobileRegex.test(values.phoneNo)) {
    errors.phoneNo = "Mobile Number is invalid";
  }

  // if (!values.apartment) {
  //   errors.apartment = "Apartment / Block / Unit is required";
  // } else if (!nameRegex.test(values.apartment)) {
  //   errors.apartment = "Apartment / Block / Unit is invalid";
  // }

  if (!values.houseNo) {
    errors.houseNo = "House Number / Block / Unit is required";
  }

  if (!values.landmark) {
    errors.landmark = " landmark is required";
  }

  if (!values.city) {
    errors.city = "Town / City is required";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (!values.postCode) {
    errors.postCode = "Postcode is required";
  }

  return errors;
}

function forgotPasswordValidate(values, trans) {
  const emailRegex = /^([a-zA-Z]+ ?)*$/;
  let errors = {};
  let t = trans('errors', { returnObjects: true });
  if (!values.email) {
    errors.email = t.email.required;
  }
  return errors;
}

function warrantyActivationValidate(values, trans) {
  let errors = {};
  let t = trans('errors', { returnObjects: true });
  // return true;
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  if (!values.age) {
    errors.age = "Age is required";
  }
  if (!values.product) {
    errors.product = "Product is required";
  }
  if (!values.country) {
    errors.country = "Country is required";
  }
  if (!values.purchaseCountry) {
    errors.purchaseCountry = "Purchase country is required";
  }
  if (!values.sendNewsLetter) {
    errors.sendNewsLetter = "Send newsletter field is required";
  }
  if (!values.whomPurchase) {
    errors.whomPurchase = "This field is required";
  }
  if (!values.purchaseReason) {
    errors.purchaseReason = "Reason for purchase is required";
  }
  if (!values.whereSeeDipulse) {
    errors.whereSeeDipulse = "This field is required";
  }
  if (!values.image) {
    errors.image = "This field (file) is required";
  } else {
    const selectedFile = document.getElementById('myFile').files[0];
    let extension = selectedFile.name.substr(selectedFile.name.lastIndexOf('.') + 1).toLowerCase();
    let allowedExtensions = ['doc', 'docx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'png'];
    if (allowedExtensions.indexOf(extension) === -1) {
      errors.image = 'Invalid file Format. Only ' + allowedExtensions.join(', ') + ' are allowed.';
    }
    if (values.image.size / 1024 / 1024 > 5) {
      errors.image = "File size too large. Please upload file less than 5MB.";
    }
  }
  if (!values.agreeToTerms) {
    errors.agreeToTerms = "This field (you need to agree to the terms to proceed) is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.zipCode) {
    errors.zipCode = "Zip Code is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.retailerStore) {
    errors.retailerStore = "Retail is required";
  }
  if (!values.vendorName) {
    errors.vendorName = "Vendor name is required";
  }
  if (!values.purchasePrice) {
    errors.purchasePrice = "Purchase price name is required";
  }
  if (!values.purchaseDate) {
    errors.purchaseDate = "Purchase date is required";
  }
  return errors;
}


function NotifyMeValidate(values, trans) {
  const emailRegex = /^([a-zA-Z]+ ?)*$/;
  let errors = {};
  let t = trans('errors', { returnObjects: true });
  if (!values.email) {
    errors.email = t.email.required;
  }
  return errors;
}
export {
  validate,
  loginValidate,
  signUpValidate,
  validateCoupons,
  resetPasswordValidation,
  addAddressValidation,
  forgotPasswordValidate,
  NotifyMeValidate,
  warrantyActivationValidate
};
