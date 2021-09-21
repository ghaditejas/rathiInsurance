import React from "react";
import "./MenuList.scss";

export default function MenuList(props) {
  const category = props.category;
  return (
    <div className="product-container" onClick={props.onClick}>
      <p className="category-text" style={{ color: props.color }}>
        {category.category[0]}
      </p>
      <p className="category-text-numbers" style={{ color: props.color }}>
        [{category.products.length}]
      </p>
    </div>
  );
}
