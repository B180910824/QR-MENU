import React from 'react';

const ItemDisplay = ({ photo, name }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <img src={photo} alt={name} style={{ width: '100px', height: 'auto' }} />
      <h2>{name}</h2>
    </div>
  );
};

export default ItemDisplay;
