import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

import menu from '../../images/menu.png';
import close from '../../images/close.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { signOut } from 'firebase/auth';

const Navbar = () => {

     const handleToggle = () => {
          var header = document.querySelector("header")
          header.classList.toggle("active")
     }

     const [user] = useAuthState(auth)

     const logout = () => {
          signOut(auth)
     }

     return (
          <header className="header">
               <img onClick={handleToggle} className="w-[4%] 
               menu absolute top-[5%] right-[3%] translate-x-[-50%] 
               translate-y-[-50%] z-[5] font-inter font-medium text-[1.56em]
               uppercase underline cursor-pointer hover:bg-[#fff] hover:rounded-[50%] hover:" src={menu} alt="menu" srcSet="" />

               <img onClick={handleToggle} className="w-[2%] close absolute top-[5%] right-[3%] translate-x-[-50%]
                translate-y-[-50%] z-[3] font-inter font-medium text-[1.56em]
                opacity-0 uppercase underline cursor-pointer" src={close} alt="close" srcSet="" />

               <div className="navbar font-bigilla absolute flex items-center justify-center top-0 right-0 w-[15%] h-screen bg-[#ECEBED] duration-[.6s] ease-[cubic-bezier(.17,.67,.55,.92)] translate-x-[100%]">
                    <ul className="list-none">
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[13px]" to="/home">HOME</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[13px]" to="/checkout">CHECKOUT</Link></li>
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[13px]" to="/blogs">BLOGS</Link></li>
                         {user ? <button onClick={logout} className="font-inter bg-orange-500 p-2 rounded-lg">Sign Out</button>
                              : <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] font-semibold text-[13px]" to="/login">LOGIN</Link></li>}
                         <li className="mt-[13px] mb-[13px]"><Link className="nav no-underline text-[#000] text-[13px]" to="/register">REGISTER</Link></li>
                    </ul>
               </div>
          </header>
     );
};

export default Navbar;


 