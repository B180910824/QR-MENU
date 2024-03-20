import React, { useState, useEffect } from 'react';
import { Frame } from '../../components/Frame';
import { Header } from '../../components/Header';
import { PropertyDefaultWrapper } from '../../components/PropertyDefaultWrapper';
import PropTypes from 'prop-types';

import './style.css';

export const Screen = () => {
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState('salat');

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `http://202.179.6.26:8000/api/product/${productCategory}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchProducts();
  }, [productCategory]);

  const handleCategorySelect = (category) => {
    setProductCategory(category);
  };

  const renderedFrames = products.map((product) => (
    <div className={`frame-${product.productType} frame`} key={product._id}>
      <Frame
        frameClassName="frame default" // Use a consistent class for all frames
        property1="default" // Always pass "default" for a uniform design
        name={product.name}
        link={product.link}
        photo={product.photo}
      />
    </div>
  ));

  return (
    <div className="screen">
      <div className="div-3">
       <div className="category-selector">
  <div onClick={() => handleCategorySelect('salat')} className={`category-option ${productCategory === 'salat' ? 'category-option-active' : ''}`}>Салат</div>
  <div onClick={() => handleCategorySelect('food1')} className={`category-option ${productCategory === 'food1' ? 'category-option-active' : ''}`}>Шөл</div>
  <div onClick={() => handleCategorySelect('food2')} className={`category-option ${productCategory === 'food2' ? 'category-option-active' : ''}`}>2р хоол</div>
  <div onClick={() => handleCategorySelect('vegan')} className={`category-option ${productCategory === 'vegan' ? 'category-option-active' : ''}`}>Цагаан хоол</div>
  <div onClick={() => handleCategorySelect('drink')} className={`category-option ${productCategory === 'drink' ? 'category-option-active' : ''}`}>Ундаа</div>
  <div onClick={() => handleCategorySelect('vodka')} className={`category-option ${productCategory === 'vodka' ? 'category-option-active' : ''}`}>Архи</div>
  // Add more categories as needed
</div>


        <div className="frame-2">
          {products.length > 0 && (
            <div className="frame-3">
              {renderedFrames}
            </div>
          )}
        </div>
        
        <div className="frame-4">
          <Header className="header-instance" property1="variant-3" />
        </div>

        <div className="frame-5">
          {/* Ensure PropertyDefaultWrapper also reflects a "default" design uniformly */}
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Salat"
            onClick={() => handleCategorySelect('salat')}
          />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Soup"
            onClick={() => handleCategorySelect('food1')}
          />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Meal"
            onClick={() => handleCategorySelect('food2')}
          />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Vegan"
            onClick={() => handleCategorySelect('vegan')}
          />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Drink"
            onClick={() => handleCategorySelect('drink')}
          />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" // Maintain "default" design
            text="Vodka"
            onClick={() => handleCategorySelect('vodka')}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
