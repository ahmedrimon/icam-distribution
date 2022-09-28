import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import './Register.css';

const Register = () => {

     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');

     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     const navigate = useNavigate()

     const handleRegister = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(email, password, firstName, lastName, confirmPassword)
          navigate('/')
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
     if (user) {
          return (
               <div>
                    <p>Registered User: {user.email}</p>
               </div>
          );
     }



     return (
          <div className="b-bg text-[#ECEBED]">
               <h2 className="text-9xl font-bigilla p-14">Play With Register</h2>
               <div className="flex justify-center align-center">
                    <div className="font-inter block">
                         <form className="md:ml-10 lg:ml-20 xl:ml-30">
                              <input onChange={(e) => setFirstName(e.target.value)} className="ml-10 register-input" type="text" placeholder="FIRST NAME" required />
                              <input onChange={(e) => setLastName(e.target.value)} className="ml-10 register-input" type="text" placeholder="LAST NAME" required />
                              <input onChange={(e) => setEmail(e.target.value)} className="ml-10 register-input" type="email" placeholder="EMAIL" required />
                              <input onChange={(e) => setPassword(e.target.value)} className="ml-10 register-input" type="password" placeholder="PASSWORD" required />
                              <input onChange={(e) => setConfirmPassword(e.target.value)} className="ml-10 register-input" type="password" placeholder="CONFIRM PASSWORD" required />

                              <div className="p-8 flex justify-center">
                                   <input onClick={handleRegister} type="submit" className="register-property p-6 w-[70%] mt-6" />
                              </div>
                         </form>
                         <div className="flex justify-center md:ml-10 lg:ml-20 xl:ml-30">
                              <h2 className="font-inter">OR</h2>
                         </div>
                         <div className="p-6 flex justify-center md:ml-10 lg:ml-20 xl:ml-30">
                              <button className="google-property p-6 w-[70%]">CONTINUE WITH GOOGLE</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
