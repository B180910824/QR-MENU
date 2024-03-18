import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDisplay from './components/ItemDisplay'; // Path to your component

const MenuScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com/api/items');
        setItems(response.data); // Assuming the data is an array of items
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <ItemDisplay key={index} photo={item.photo} name={item.name} />
      ))}
    </div>
  );
};

export default MenuScreen;
