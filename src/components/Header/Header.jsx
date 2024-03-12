/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Mongolia2 } from "../../icons/Mongolia2";
import { SrArrowLeft } from "../../icons/SrArrowLeft";
import { SrSearch2 } from "../../icons/SrSearch2";
import "./style.css";

export const Header = ({ property1, className }) => {
  return (
    <div className={`header property-1-3-${property1} ${className}`}>
      {property1 === "default" && (
        <div className="group">
          <div className="text-wrapper-3">Golden whip restaurant</div>
          <Mongolia2 className="mongolia" />
        </div>
      )}

      {property1 === "variant-2" && <SrArrowLeft className="sr-arrow-left" />}

      {property1 === "variant-3" && (
        <>
          <Mongolia2 className="mongolia-2" />
          <SrSearch2 className="sr-search" />
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
