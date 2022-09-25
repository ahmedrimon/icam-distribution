import React from 'react';
import './Register.css';

const Register = () => {

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log('clicked submit form');
     }


     return (
          <div className="b-bg text-[#ECEBED]">
               <h2 className="text-9xl font-bigilla p-14">Play With Register</h2>
               <div className="flex justify-center align-center">
                    <div className="font-inter block">
                         <form onSubmit={handleSubmit}>
                              <input className="ml-10 register-width" type="text" placeholder="FIRST NAME" required />
                              <input className="ml-10 register-width" type="text" placeholder="LAST NAME" required />
                              <input className="ml-10 register-width" type="text" placeholder="EMAIL" required />
                              <input className="ml-10 register-width" type="password" placeholder="PASSWORD" required />
                              <input className="ml-10 register-width" type="password" placeholder="CONFIRM PASSWORD" required />

                              <div className="p-8 flex justify-center">
                                   <input type="submit" className="register-property p-6 w-[70%] mt-6" />
                              </div>
                         </form>
                         <div className="flex justify-center">
                              <h2 className="font-inter">OR</h2>
                         </div>
                         <div className="p-6 flex justify-center">
                              <button className="google-property p-6 w-[70%]">CONTINUE WITH GOOGLE</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
