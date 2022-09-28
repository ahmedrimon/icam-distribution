import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import './Register.css';

const Register = () => {

     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

     const navigate = useNavigate()

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log('clicked submit form');
     }

     const handleGoogleSignIn = () => {
          signInWithGoogle()
          if (user) {
               navigate('/')
          }
     }

     if (error) {
          return (
               <div>
                    <p>Error: {error.message}</p>
               </div>
          );
     }

     if (loading) {
          return <p>Loading...</p>;
     }



     return (
          <div className="b-bg text-[#ECEBED]">
               <h2 className="text-9xl font-bigilla p-14">Play With Register</h2>
               <div className="flex justify-center align-center">
                    <div className="font-inter block">
                         <form className="md:ml-10 lg:ml-20 xl:ml-30" onSubmit={handleSubmit}>
                              <input className="ml-10 register-input" type="text" placeholder="FIRST NAME" required />
                              <input className="ml-10 register-input" type="text" placeholder="LAST NAME" required />
                              <input className="ml-10 register-input" type="email" placeholder="EMAIL" required />
                              <input className="ml-10 register-input" type="password" placeholder="PASSWORD" required />
                              <input className="ml-10 register-input" type="password" placeholder="CONFIRM PASSWORD" required />

                              <div className="p-8 flex justify-center">
                                   <input type="submit" className="register-property p-6 w-[70%] mt-6" />
                              </div>
                         </form>
                         <div className="flex justify-center md:ml-10 lg:ml-20 xl:ml-30">
                              <h2 className="font-inter">OR</h2>
                         </div>
                         <div className="p-6 flex justify-center md:ml-10 lg:ml-20 xl:ml-30">
                              <button onClick={handleGoogleSignIn} className="google-property p-6 w-[70%]">CONTINUE WITH GOOGLE</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
