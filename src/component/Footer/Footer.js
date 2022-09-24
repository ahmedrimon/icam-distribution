import React from 'react';
import './Footer.css';

const Footer = () => {

     const date = new Date();
     const year = date.getFullYear();

     return (
          <div className="w-[100%] border-t-2 border-t-neutral-400 mt-12">
               <div className="text-[#F74C25] mt-12 mb-6 ml-6">
                    <h1 className="font-inter text-6xl">Our Story</h1>
                    <p className="font-inter w-[60%] mt-6">The story behind Icam is one of exploration, creativity and curiosity</p>

                    <div className="flex justify-around p-6 font-inter cursor-pointer">
                         <div>
                              <li className="list-none list-hover">Word</li>
                              <li className="list-none list-hover">Studio</li>
                              <li className="list-none list-hover">News</li>
                              <li className="list-none list-hover">Contact</li>
                         </div>
                         <div>
                              <li className="list-none list-hover">Behance</li>
                              <li className="list-none list-hover">Dribble</li>
                              <li className="list-none list-hover">Twitter</li>
                              <li className="list-none list-hover">Instagram</li>
                         </div>
                    </div>
                    <p className="flex justify-center">© {year} re grocery inc. All rights reserved.</p>
               </div>
          </div>
     );
};

export default Footer;