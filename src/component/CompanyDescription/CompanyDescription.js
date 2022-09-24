import React from 'react';
import './CompanyDescription.css';

import storeImage from '../../images/storeImage.jpg';

const CompanyDescription = () => {
     return (
          <div className="text-[#F74C25] mt-8">
               <div className="m-auto mb-6">
                    <h2 className="font-bigilla text-[7vw] 1xs:ml-10">OUR ETHOS</h2>
                    <h3 className="font-inter w-[60%] mt-2 1xs:ml-10">We’re here because the grocery industry has made it impossible to avoid plastic packaging and waste, and we want to change that.</h3>
                    <button className="font-inter button-property mt-4 1xs:ml-10">Read More</button>
               </div>
               <div>
                    <img className="xs:hidden 1xs:hidden sm:hidden md:hidden lg:inherit" src={storeImage} alt="storeImage" />
               </div>
          </div>
     );
};

export default CompanyDescription;