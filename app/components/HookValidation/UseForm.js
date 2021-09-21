import { useState, useEffect } from "react";

const useForm = (validate, trans, callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [showErrorAfterPageLoad, setshowErrorAfterPageLoad] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  useEffect(() => {
    if (showErrorAfterPageLoad && submittedOnce) {
      setErrors(validate(values, trans));
    }
    setshowErrorAfterPageLoad(true);
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (Object.keys(validate(values, trans)).length > 0) {
      setErrors(validate(values, trans));
    } else {
      callback();
    }
    setSubmittedOnce(true);
  };

  const resetForm = () => {
    setValues(values => ({}));
    setSubmittedOnce(false);
  }

  const handleChange = (event) => {
    event.persist();
    if (event.target.type == "select-one") {
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }

    if (event.target.type == "file") {
      const selectedFile = document.getElementById('myFile').files[0];
      setValues((values) => ({ ...values, image: selectedFile }));
    }

    if (event.target.type == "radio") {
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }

    if (event.target.type !== "checkbox") {
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    } else {
      if (event.target.name == "agreeToTerms") {
        setValues((values) => ({ ...values, [event.target.name]: event.target.checked }));
      } else {
        if (event._targetInst.memoizedProps.parent !== undefined) {
          setValues((values) =>
            ({ ...values, [event._targetInst.memoizedProps.parent]: { ...values[event._targetInst.memoizedProps.parent], [event.target.id]: event.target.checked } }));
        }
      }
    }
  };

  return {
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
  };
};

export default useForm;
