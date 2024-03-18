/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, text = "Elsen tasarkhai", divClassName }) => {
  return (
    <div className={`property-default-wrapper property-1-4-${property1} ${className}`}>
      <div className={`elsen-tasarkhai ${divClassName}`}>{text}</div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
