import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, text = "Elsen tasarkhai", divClassName, onClick }) => {
  return (
    <div
      className={`property-default-wrapper property-1-4-${property1} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex="0" // Make it focusable
      onKeyPress={(e) => { if(e.key === 'Enter' || e.key === ' ') onClick(); }} // Trigger onClick on Enter or Space
      aria-label={text} // Accessibility label
    >
      <div className={`elsen-tasarkhai ${divClassName}`}>{text}</div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  onClick: PropTypes.func,
};
