import React from "react";

import ProductTiles from "../../components/ProductTiles";
import NavigationKey from "../../components/NavigationKey";
import Assets from "../../lib/constants/assets";

const ProductItem = ({ className, headingColor, item, ...props }) => {
  const _pRef = React.useRef(null);
  const [hasLeft, setHasLeft] = React.useState(false);
  const [hasRight, setHasRight] = React.useState(false);
  React.useEffect(() => {

    // check if the right has some space left
    if (_pRef.current) {
      const offsetWidth = _pRef.current.offsetWidth;
      const screenWidth = (window.innerWidth * 25) / 100
      if (_pRef.current.scrollWidth > offsetWidth || (offsetWidth === 0 && _pRef.current.scrollWidth === 0)) {
        // use any value to determine
        setHasRight(true);
      }
      if (screenWidth > offsetWidth)
        setHasRight(false)
    }
  }, [item]);

  return (
    <div className={className} id={item.category[0]}>
      <div className="title-container-showcase">
        <h2
          className="color-text heading"
          style={{ color: headingColor, marginTop: "3px" }}
        >
          {item.category[0]}
        </h2>
        <NavigationKey
          leftSrc={hasLeft ? Assets.GreenLeftAngle : Assets.LeftAngle}
          leftClassName={hasLeft ? "pagination-menu left enabled" : "pagination-menu left disabled"}
          onClickLeft={(e) => {
            if (!hasLeft) {
              return;
            }

            if (_pRef.current) {
              _pRef.current.scrollLeft -= 200;
              setHasRight(true);

              if (_pRef.current.scrollLeft < 100) {
                _pRef.current.scrollLeft -= 200;
                setHasLeft(false);
              }
            }
          }}
          rightSrc={hasRight ? Assets.GreenRightAngle : Assets.RightAngle}
          rightClassName={hasRight ? "pagination-menu right enabled" : "pagination-menu right disabled"}
          onClickRight={(e) => {
            if (!hasRight) {
              return;
            }

            if (_pRef.current) {
              _pRef.current.scrollLeft += 200;
              setHasLeft(true);

              const w = _pRef.current.scrollLeft + _pRef.current.offsetWidth;
              if (_pRef.current.scrollWidth - w === 0) {
                setHasRight(false);
              } else {
                setHasRight(true);
              }
            }
          }}
        />
      </div>
      <div ref={_pRef} className="scrollmenu">
        {item.products.length ? item.products.map((item, index) => (
          <ProductTiles
            product={item}
            cartChange={props.cartChange}
            key={index}
            trans={props.trans}
          />
        )) : <><span>No Products Found</span></>}
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
