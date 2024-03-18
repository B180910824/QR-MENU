import React, { useState, useEffect } from 'react';
import { Frame } from '../../components/Frame';
import { Header } from '../../components/Header';
import { PropertyDefaultWrapper } from '../../components/PropertyDefaultWrapper';
import PropTypes from 'prop-types';

import './style.css';

export const Screen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://192.168.0.106:8000/api/product/khuushuur');
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
  }, []);
  const renderedFrames = products.map((product, index) => (
    <div className={`frame-${product.productType} frame`} key={product._id}>
      <Frame
        frameClassName={`frame-${product.productType}`} // Customize the class name based on your CSS
        property1={product.productType === 'buuz' ? 'variant-2' : 'default'}
        name={product.name}
        link={product.link}
        photo={product.photo}
      />
    </div>
  ));
  
  return (
    <div className="screen">
      <div className="div-3">
        <div className="frame-2">
          {products.length > 0 && (
            <div className="frame-3">
               {renderedFrames}
              {/* You can use additional Frames here, with products[1], products[2], etc. */}
            </div>
          )}
          {/* Add additional .frame-3 divs as necessary for more products */}
        </div>
        <div className="frame-4">
          <Header className="header-instance" property1="variant-3" />
          <div className="overlap-group">
            <div className="group-2">
              <div className="text-wrapper-4">Алтан ташуур ресторан</div>
              <div className="tashuur-wrapper">
                <img className="tashuur" alt="Tashuur" src="https://c.animaapp.com/kYIVtpEG/img/tashuur@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-5">
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="default" text="Зууш" />
          <PropertyDefaultWrapper
            className="frame-48342-instance"
            divClassName="frame-instance"
            property1="variant-2"
            text="Бууз"
          />
          <PropertyDefaultWrapper
            className="design-component-instance-node"
            divClassName="frame-instance"
            property1="variant-2"
            text="Хуушуур"
          />
          <PropertyDefaultWrapper
            className="frame-6"
            divClassName="frame-instance"
            property1="variant-2"
            text="Сэт хоол"
          />
          <PropertyDefaultWrapper className="frame-7" divClassName="frame-instance" property1="variant-2" text="Шөл" />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="variant-2"
            text="Архи"
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
