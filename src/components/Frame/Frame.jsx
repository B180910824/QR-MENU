import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Frame = ({ property1, frameClassName, name, link, photo }) => {
  const divStyle = photo ? { backgroundImage: `url(${photo})` } : {};

  return (
    <div className={`frame ${property1}`}>
      <div className="div" style={divStyle} />
      <div className={`div-2 ${frameClassName}`}>
        <div className="div-wrapper">
          <div className="text-wrapper">{name}</div>
        </div>
        <div className="text-wrapper-2">{link}</div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'default']),
  frameClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string, // Add this if you're using imageUrl prop
};

export default Frame;
