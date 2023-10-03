import React from 'react';
import product from './product'; // Import the product JSON object


function Image() {
  return <img src={product.imageUrl} alt={product.name} />;
}

export default Image;
