import React from "react";
import { Spinner } from "react-bootstrap";
import "./loader.scss";
function Loader({ productsData, ...props }) {
  return (
    <div className="loading">
      <Spinner animation="border" size="lg" />
    </div>
  );
}

export default Loader;
