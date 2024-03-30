import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const categories = ['salat', 'food1', 'food2', 'vegan', 'drink', 'vodka'];

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      for (const category of categories) {
        const url = `http://202.179.6.26:8000/api/product/${category}`;
        const response = await fetch(url);
        const data = await response.json();
        const product = data.find(item => item._id === id);
        if (product) {
          setProductDetail(product);
          break; // Exit the loop once the product is found
        }
      }
    };
    fetchData();
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  // Inline styles
  const styles = {
    container: {
      fontFamily: '"Your Font Name", sans-serif', // Replace with your font
      padding: '16px',
      color: '#333' // Adjust the color to match your design
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    backButton: {
      marginRight: '20px',
      // Add more styling
    },
    title: {
      fontWeight: 'bold',
      // Add more styling
    },
    image: {
      width: '360px',
      height: '260px',
      borderRadius: '8px', // Adjust as per your design
      marginBottom: '20px'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    price: {
      fontSize: '20px',
      color: 'orange', // Adjust the color to match your design
      marginBottom: '10px'
    },
    description: {
      fontSize: '16px',
      marginBottom: '10px'
    },
    ingredients: {
      fontSize: '14px',
      fontStyle: 'italic',
      color: '#777' // Adjust the color to match your design
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
      </div>
      <img style={styles.image} src={productDetail.images[0]} alt={productDetail.name} />
      <h1 style={styles.title}>{productDetail.name}</h1>

      <p style={styles.price}>{productDetail.link}</p> {/* Assuming 'link' is used for price */}
      <p style={styles.description}>{productDetail.description}</p>
      <p style={styles.ingredients}>{productDetail.description1}</p>
      <p style={styles.ingredients}>{productDetail.description2}</p>
      {/* Optionally display other details */}
    </div>  
  );
};

export default ProductDetail;
