import React from 'react';
import Lottie from "lottie-react";
import animationData from "../lotties/errorPage.json";

const ErrorPage = () => {

     const style = {
          width: '400px',
          height: '60vh',
          margin: 'auto',
     }

     const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice'
          }
     };

     return (
          <Lottie style={style} options={defaultOptions} animationData={animationData} loop={true} />
     );
};

export default ErrorPage;