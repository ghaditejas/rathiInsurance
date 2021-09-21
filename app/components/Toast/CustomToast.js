import React from 'react';

const ToastMessage = ({ isSuccess = false, message, ...props }) => {
  return (
    <>
      <div className='text-center'>
        <span className={isSuccess ? "alert success-message d-inline-block" : "verified-text alert alert-danger d-inline-block"}>
          {message}
        </span>
        {/* {isSuccess ? <span className="alert success-message d-inline-block">
          {message}
        </span> :
          <span className="verified-text alert alert-danger d-inline-block">
            {message}
          </span>
        } */}
      </div>
    </>
  );
}

export default ToastMessage;