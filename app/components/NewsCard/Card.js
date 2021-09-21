import React from "react";
import "./Card.scss";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <Container className="card-container">
        <div className="card ml-4">
          <img className="card-img-top" src={props.imgUrl}/>
          <div className="card-body">
            <h6 className="card-title">{props.heading}</h6>
            <p className="card-text">{props.content}</p>
              <div className="card-footer pl-0">
                <Link to = {props.link}>{props.linkText}</Link>
                <span>{props.date}</span>
              </div>
          </div>
        </div>
    </Container>
  );
}

export default Card;
