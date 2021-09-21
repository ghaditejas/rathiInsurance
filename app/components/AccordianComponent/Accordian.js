import React, { useState } from "react";
import "./Accordian.scss";
import { Accordion, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useHistory, Link } from "react-router-dom";

function Accordian({ productsData, ...props }) {
  let history = useHistory();
  const accordianData = props.data;
  let { longDescription } = productsData;
  longDescription = longDescription.replace(/\\n/g, '<br>');
  const { attributes } = productsData.inventory[0];
  const [accordianStatus, setAccordianStatus] = useState(0);
  const toggleAccordian = (key) => {
    if (key !== accordianStatus) {
      setAccordianStatus(key);
    } else {
      setAccordianStatus(0);
    }
  };

  const showAttributes = (index) => {
    return (Object.keys(attributes).length !== 0 && index == 0) && <ul className="accordian-attr-list">
      {Object.keys(attributes).map((key) => {
        return <li><span className="label">{key}:</span> {attributes[key]}</li>
      })}
    </ul>
  }
  const categoryImages = props.productByCategory.productByCategory;
  const categoryImage = categoryImages.map((result, index) => (
    <div class="flex-fill mr-3">
      <Link to={`/products/${result.slug}`}>
        <img src={result.images.featuredImage.thumb.imagePath} />
      </Link>
    </div>
  ))
  return (
    <Accordion id="accordion">
      {accordianData.map((i, index) => (
        <Card key={index}>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey={index + 1}
            onClick={() => toggleAccordian(index + 1)}
          >
            {i.title}
            <FontAwesomeIcon
              icon={index + 1 !== accordianStatus ? faCaretDown : faCaretUp}
              className="float-right"
            />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index + 1}>
            <Card.Body>
              {/* {index !== 0 && <p dangerouslySetInnerHTML={{ __html: i.content }} />} */}
              {index == 0 && <p dangerouslySetInnerHTML={{ __html: longDescription }} />}
              {/* {showAttributes(index)} */}
              {
                index == 1 &&
                <div className="d-flex">
                  {categoryImage}
                </div>
              }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))
      }
    </Accordion >
  );
}

export default Accordian;
