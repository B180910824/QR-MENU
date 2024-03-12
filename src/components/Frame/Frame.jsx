/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, frameClassName }) => {
  return (
    <div className={`frame ${property1}`}>
      <div className="div" />
      <div className={`div-2 ${frameClassName}`}>
        <div className="div-wrapper">
          <div className="text-wrapper">Хуушуур 8ш</div>
        </div>
        <div className="text-wrapper-2">20,000MNT</div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
