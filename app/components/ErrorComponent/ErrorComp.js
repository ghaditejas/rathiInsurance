import React, { useEffect, useState } from 'react';
import { Toast } from "react-bootstrap";

const ErrorComp = ({ error = null, customMessage = null, showMessage = false }) => {
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    if (error && error.error) {
      setShowError({ ...error, show: true });
    }
  }, [error && error.error])

  return (
    <Toast show={showError && showError.show}>
      {showMessage ? <Toast.Body bsPrefix="toast-content text-white">
        {showError && showError.message}
      </Toast.Body> :
        <Toast.Body bsPrefix="toast-content text-white">
          {!customMessage ? showError && showError.error : customMessage}
        </Toast.Body>
      }
    </Toast>
  );
};

export default ErrorComp;