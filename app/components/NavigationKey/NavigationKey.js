import React from "react";

import Assets from "../../lib/constants/assets";
import "./NavigationKey.scss";

function NavigationKey(props) {
  return (
    <div className="menu-container">
      <img
        src={props.leftSrc || Assets.LeftAngle}
        className={props.leftClassName}
        onClick={props.onClickLeft}
      />
      <img
        src={props.rightSrc || Assets.RightAngle}
        className={props.rightClassName}
        onClick={props.onClickRight}
      />
    </div>
  );
}
export default NavigationKey;
