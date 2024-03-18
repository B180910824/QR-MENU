import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PropertyDefaultWrapper } from './components/PropertyDefaultWrapper';
import './style.css'; 

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://202.179.6.26:8000/api/product/april');
        setMenuItems(response.data); // Assuming the API returns an array of menu items
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="menu-screen">
      {menuItems.map((item, index) => (
        // Assuming you want to display the name and use the photo as a background or an image within the wrapper
        <PropertyDefaultWrapper
          key={index}
          property1={item.property1 || 'default'} // Assuming 'property1' determines some style or variant
          className={item.className || ''} // This might not be necessary unless you're dynamically adding classes based on the item
          text={item.name} // Display the event name
          divClassName={item.divClassName || ''}
        >
          {/* Optionally, you might want to display the photo within the PropertyDefaultWrapper. 
               You'd need to adjust the PropertyDefaultWrapper component to accept children or a photo prop if it doesn't already. */}
          <img src={item.photo} alt={item.name} />
        </PropertyDefaultWrapper>
      ))}
    </div>
  );
};

export default MenuScreen;
