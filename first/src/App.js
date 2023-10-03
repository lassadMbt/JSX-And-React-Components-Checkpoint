import React from 'react';
import product from './product'; // Import your product data JSON object
import Name from './name'; // Import the Name component
import Price from './price'; // Import the Price component
import Description from './description'; // Import the Description component
import Image from './image'; // Import the Image component

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
function App() {
  const firstName = "Mrabet"; // Replace with the first name or "there" if not provided
  const imageSrc = "./gg.jpg"; // Replace with image URL
  const greeting = firstName ? `Hello, ${firstName}!` : 'Hello, there!';

  return (

   

    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Name />
        <Price />
        <Description />
        {firstName && <Image imageUrl={imageSrc} altText={firstName} />}
        </Card.Body>
      <p>{greeting}</p>
      </Card>

     
  );
}

export default App;
