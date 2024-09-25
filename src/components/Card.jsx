import React from 'react';

function Card({ product, addToBasket }) {
  return (
    <div style={{ width: '300px', border: '1px solid black', padding: '10px' }} >
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img style={{ width: '200px' }} src={product.image} alt='img' />
      <button onClick={() => addToBasket(product)}>Add to basket</button>
    </div>
  );
}

export default Card;