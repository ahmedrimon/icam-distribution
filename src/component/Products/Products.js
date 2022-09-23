import React from 'react';
import { Link } from 'react-router-dom';

import './Products.css';

const Products = (props) => {

     const { name, image, price, description } = props.prod;

     return (
          <div className="lg:border lg:border-[#F74C25] lg:rounded">
               <img className="flex justify-center p-6" src={image} alt="" />
               <div className="font-inter flex justify-between p-4 text-[4vw] text-[#F74C25] lg:text-[2vw]">
                    <h2>{name}</h2>
                    <h3>{price}$</h3>
               </div>
               <div>
                    <h4 className="font-inter p-4 text-[3vw] text-[#F74C25] lg:text-[1em]">{description}</h4>
               </div>
               <div className="flex justify-around w-[96%] cursor-pointer">
                    <div className="border-property flex justify-center p-1">
                         <p className="font-inter text-[#F74C25]">Organic</p>
                    </div>
                    <div className="border-property flex justify-center p-1">
                         <p className="font-inter text-[#F74C25]">NonGmo</p>
                    </div>
                    <div className="border-property flex justify-center p-1">
                         <p className="font-inter text-[#F74C25]">Vegan</p>
                    </div>
               </div>
               <div className="p-8 flex justify-center">
                    <Link to="#" className="font-inter checkout-property text-[#F74C25] mt-4 p-6">Checkout</Link>
               </div>
          </div>
     );
};

export default Products;