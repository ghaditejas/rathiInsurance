import React from 'react';
import Header from '../../components/Header/Header';
import './errorwrapper.scss';
import { Container } from "react-bootstrap";

function Errorwrapper(props) {
  return (
    <Container className="main-container" fluid>
      <div className="wrapper">
        <div className="error-container">
          <h1 className="status-code">{props.statusCode}</h1>
          <p>{props.errorMssg}</p>
        </div>
      </div>
    </Container>
  );
}

export default Errorwrapper;