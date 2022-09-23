import React from 'react';
import useFetch from './../../Hooks/useFetch';
import Products from './../Products/Products';

const Product = () => {

     const [products] = useFetch();

     return (
          <div>
               <div className="lg:grid lg:grid-cols-3 lg:gap-2 lg:p-6">
                    {
                         products.map(prod => <Products key={prod.id} prod={prod} />)
                    }
               </div>
          </div>
     );
};

export default Product;