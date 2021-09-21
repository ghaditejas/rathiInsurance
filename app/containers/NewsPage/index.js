import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./news.scss";
import Detail from "./Detail";
import Card from "../../components/NewsCard/Card";
import { NewsData } from "../../../dummyJson";
import NavigationKey from "../../components/NavigationKey/NavigationKey";
import { DateFunction } from "../../assets/util";

function News() {
  const scrollLeft = () => {
    document.getElementById("cardSection").scrollLeft -= 100;
  };

  const scrollRight = () => {
    document.getElementById("cardSection").scrollLeft += 70;
  };

  return (
    <div className="news-section" id="newsandblogs">
      <Container className="news-container">
        <div className="news-wrapper">
          <Row>
            <Col>
              <div>
                <h1 className="heading mobile-heading">NEWS & BLOGS</h1>
                <div className="navigationkey">
                  <h2 className="heading mobile-heading">LATEST UPDATES</h2>
                  <NavigationKey
                    onClickLeft={scrollLeft}
                    onClickRight={scrollRight}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="pl-1 card-row">
            <Col
              className="pt-5 col-md-12 d-flex news-blog-section"
              id="cardSection"
            >
              {NewsData.map((item, index) => (
                <Card
                  heading={item.heading}
                  imgUrl={item.imageUrl}
                  content={item.content}
                  date={DateFunction(item.date)}
                  link={"/news-detail"}
                  linkText={"KNOW MORE"}
                />
              ))}
            </Col>
          </Row>
          <Row className="mobile-navigationkeys">
            <NavigationKey
              onClickLeft={scrollLeft}
              onClickRight={scrollRight}
            />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export { News, Detail };
