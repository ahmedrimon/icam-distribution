import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

import menu from '../../images/menu.png';
import close from '../../images/close.png';

const Navbar = () => {

     const handleToggle = () => {
          var header = document.querySelector("header")
          header.classList.toggle("active")
     }

     return (
          <header className="header">
               <img onClick={handleToggle} className="w-[4%] 
               menu absolute top-[5%] right-[3%] translate-x-[-50%] 
               translate-y-[-50%] z-[5] font-inter font-medium text-[1.56em]
               uppercase underline cursor-pointer 1xs:w-[6%] 3xl:w-[3%] hover:bg-[#fff] hover:rounded-[50%] hover:" src={menu} alt="menu" srcset="" />

               <img onClick={handleToggle} className="w-[2%] close absolute top-[5%] right-[3%] translate-x-[-50%]
                translate-y-[-50%] z-[3] font-inter font-medium text-[1.56em]
                opacity-0 uppercase underline cursor-pointer 1xs:w-[4%] 3xl:w-[1.5%]" src={close} alt="close" srcset="" />

               <div className="navbar font-bigilla absolute flex items-center justify-center top-0 right-0 w-[15%] h-screen bg-[#ECEBED] duration-[.6s] ease-[cubic-bezier(.17,.67,.55,.92)] translate-x-[100%] 1xs:w-[40%] xs:w-[25%] sm:w-[40%] 3xl:w-[30%]">
                    <ul className="list-none">
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">HOME</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">SERVICES</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">CHECKOUT</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">BLOGS</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">ABOUT</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">LOGIN</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[20px]" to="#">REGISTER</Link></li>
                    </ul>
               </div>
          </header>
     );
};

export default Navbar;