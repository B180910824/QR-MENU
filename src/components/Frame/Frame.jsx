import PropTypes from "prop-types";
import React from "react";
import "./style.css";

// Modified Frame component to accept additional props for text and price
export const Frame = ({ property1, frameClassName, text, price }) => {
  return (
    <div className={`frame ${property1}`}>
      <div className="div" />
      <div className={`div-2 ${frameClassName}`}>
        <div className="div-wrapper">
          {/* Use the text prop for dynamic content */}
          <div className="text-wrapper">{text}</div>
        </div>
        {/* Use the price prop for dynamic content */}
        <div className="text-wrapper-2">{price}</div>
      </div>
    </div>
  );
};

// Updated propTypes to include the new props
Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  frameClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
