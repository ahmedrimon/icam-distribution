import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {


     const navigate = useNavigate();
     const location = useLocation()

     let { from } = location.state || { from: { pathname: '/checkout' } };

     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const handleSignIn = () => {
          signInWithEmailAndPassword(email, password)
     }

     if (user) {
          navigate(from, { replace: true })
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
          <div className="n-bg text-[#ECEBED]">
               <h2 className="text-9xl font-bigilla p-14">Hey Come To Login</h2>
               <div className="flex justify-center align-center">
                    <div className="font-inter block">
                         <input onChange={(e) => setEmail(e.target.value)} className="ml-10" type="email" placeholder="EMAIL" required />
                         <input onChange={(e) => setPassword(e.target.value)} className="ml-10" type="password" placeholder="PASSWORD" required />
                         <p className="mt-6 ml-[18em] cursor-pointer">Forgot Password</p>

                         <div className="p-8 flex justify-center">
                              <button onClick={handleSignIn} className="login-property p-6 w-[70%] mt-6">LOGIN</button>
                         </div>
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

export default Login;