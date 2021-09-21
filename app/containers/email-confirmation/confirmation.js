import React from "react";
import "./confirmation.scss";
import { Container, Row, Col } from "react-bootstrap";
import ToastMessage from "../../components/Toast/CustomToast";

function EmailConfirmation(props) {
  const { trans } = props;

  return (
    <div className="email-confirmation-main">
      <Container className="email-confirmation-container">
        <Row>
          <Col>
            <h1 className="congratulations-text">{trans("congratulations")}</h1>
            <ToastMessage message={trans("confirmation_mssg")} isSuccess={true} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default EmailConfirmation;