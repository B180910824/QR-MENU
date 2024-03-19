import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Frame = ({ frameClassName, name, link, photo }) => {
  const divStyle = photo ? { backgroundImage: `url(${photo})` } : {};

  return (
    <div className={`frame ${frameClassName}`}>
      <div className="div" style={divStyle} />
      <div className="div-2">
        <div className="div-wrapper">
          <div className="text-wrapper">{name}</div>
          <div className="text-wrapper-2">{link}₮</div>
        </div>
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
