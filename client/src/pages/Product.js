import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return <h2>Product Page: {id}</h2>;
};

export default Product;