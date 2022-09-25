import React from 'react';
import './Login.css';

const Login = () => {
     return (
          <div className="n-bg text-[#ECEBED]">
               <h2 className="text-9xl font-bigilla p-14">Hey Come To Login</h2>
               <div className="flex justify-center align-center">
                    <div className="font-inter block">
                         <input className="ml-10" type="text" placeholder="EMAIL" />
                         <input className="ml-10" type="password" placeholder="PASSWORD" />
                         <p className="mt-6 ml-[18em] cursor-pointer">Forgot Password</p>

                         <div className="p-8 flex justify-center">
                              <button className="login-property p-6 w-[70%] mt-6">LOGIN</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;