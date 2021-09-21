import React from "react";
import "./quantitycart.scss";

function QuantityCart(props) {
  return (
    <div className="quantity-box vertical-center">
      <div className="quantity vertical-center">
        <div className="quantity-title desktop-view">
          <span className="qunatity-text"> Quantity</span>
        </div>
        <div className="quantity-increment">
          {/* <i className="fa fa-chevron-left text-white left-arrow" onClick={() => quantityChange(i[0], parseInt(i[1]['product_quantity']) - 1)}></i> */}
          <span
            className={
              props.quantity == 1
                ? " minus-sign disabled"
                : " minus-sign"
            }
            onClick={() =>
              props.quantity > 1 ? props.quantityChange(props.product, "decrement") : void 0}
          />
          <span className="product_quantity">{props.quantity}</span>
          {/* <i className="fa fa-chevron-right text-white right-arrow" onClick={() => quantityChange(i[0], parseInt(i[1]['product_quantity']) + 1)}></i> */}
          <span
            className="plus-sign"
            onClick={() =>
              props.quantityChange(
                props.product,
                "increment"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default QuantityCart;
