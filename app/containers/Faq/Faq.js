import React, { useState, useEffect } from "react";
import "./faq.scss";

import { Container, Row, Col } from "react-bootstrap";
import Assets from "../../lib/constants/assets";
import { FAQ } from "../../../dummyJson";

function Faq(props) {
  const [faqState, setFaq] = useState({
    faq_topic: 0,
    halfFaq: props.FAQ[0].data.length % 2 == 0 ? props.FAQ[0].data.length / 2 : parseInt(props.FAQ[0].data.length / 2) + 1
  });

  const [rowClassActive, setRowClassActive] = useState('unchanged');

  const { trans } = props;

  const changeFaqTopic = topicIndex => {
    setFaq({
      faq_topic: topicIndex,
      halfFaq: (props.FAQ[topicIndex].data.length % 2 == 0 ? props.FAQ[topicIndex].data.length / 2 : parseInt(props.FAQ[topicIndex].data.length / 2) + 1)
    });

    setRowClassActive('changed-row');
  };


  return (
    <div className="faq-wrapper" id="faq">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={12} sm={12}>
            <div>
              <h2 className="faq-heading heading">{trans("any_questions")}</h2>
              <h1 className="faq-subheading heading">{trans("faq")}</h1>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center fa-topic-main">
          {props.FAQ.map((i, index) => (
            <a
              key={index}
              className={
                faqState.faq_topic === index
                  ? "d-flex faq-topic flex-column faq-topic-active pull-left"
                  : "d-flex faq-topic flex-column pull-left"
              }
              onClick={() => changeFaqTopic(index)}
            >
              {i.name}
            </a>
          ))}
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}
            className="d-flex align-items-left flex-column question-left">
            {props.FAQ[faqState.faq_topic].data.map((i, index) =>
              index <= faqState.halfFaq - 1 ? (
                <Row key={(index + 1) * Math.random()} className="question-answer">
                  <div className={`question ${rowClassActive}`}>{i.question}</div>
                  <div
                    className={`answer ${rowClassActive}`}
                    dangerouslySetInnerHTML={{ __html: i.answer }}
                  />
                </Row>)
                : null)}
          </Col>

          <Col lg={6} md={6} sm={12}
            className="d-flex align-items-left flex-column question-right">
            {props.FAQ[faqState.faq_topic].data.map((i, index) =>
              index > faqState.halfFaq - 1 ? (
                faqState.faq_topic != "diPulse mobile App" ?
                  <Row key={(index + 1) * Math.random()} className="question-answer">
                    <div className={`question ${rowClassActive}`}>
                      {props.FAQ[faqState.faq_topic].data[index]
                        ? props.FAQ[faqState.faq_topic].data[index]["question"]
                        : null}
                    </div>
                    <div className={`answer ${rowClassActive}`}>
                      {props.FAQ[faqState.faq_topic].data[index]
                        ? props.FAQ[faqState.faq_topic].data[index]["answer"]
                        : null}
                    </div>
                  </Row> :
                  <Row key={(index + 1) * Math.random()} className="question-answer">
                    <div className={`question ${rowClassActive}`}>{i.question}</div>
                    <div
                      className={`answer ${rowClassActive}`}
                      dangerouslySetInnerHTML={{ __html: i.answer }}
                    />
                  </Row>)
                : null)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Faq;