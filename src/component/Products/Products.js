import React from 'react';

const Products = (props) => {

     const { name, image, price, description } = props.prod;

     return (
          <div>
               <h2>Name: {name}</h2>
               <img src={image} alt="Here are" />
               <h3>Price: {price}</h3>
               <h4>Description: {description}</h4>
          </div>
     );
};

export default Products;