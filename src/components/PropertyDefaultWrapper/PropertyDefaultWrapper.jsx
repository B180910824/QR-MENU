import PropTypes from "prop-types";
import React from "react";
import "./style.css"; // Assuming your styles are defined here

export const PropertyDefaultWrapper = ({ property1, className, text, divClassName, photo }) => {
  return (
    <div className={`property-default-wrapper property-1-4-${property1} ${className}`}>
      {photo && <img src={photo} alt={text} className="event-photo" />} {/* Render image if photo URL is provided */}
      <div className={`elsen-tasarkhai ${divClassName}`}>{text}</div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  divClassName: PropTypes.string,
  photo: PropTypes.string, // Add propType for the photo URL
};
