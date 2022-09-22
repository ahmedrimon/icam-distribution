import React from 'react';
import useFetch from './../../Hooks/useFetch';
import Products from './../Products/Products';

const Product = () => {

     const [products] = useFetch();

     return (
          <div>
               <h2>Products: {products.length}</h2>
               {
                    products.map(prod => <Products id={prod.id} prod={prod} />)
               }
          </div>
     );
};

export default Product;