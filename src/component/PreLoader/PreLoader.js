import React from 'react';
import './PreLoader.css';

const PreLoader = () => {

     const total = 10; // total elements
     const current = 10; // current loaded elements
     const calculatedPercentage = Math.floor(current / total * 100); // outcome of this would be 50%

     return (
          <div className="progressBarContainer">
               <span className="progress" style={{ maxWidth: `${calculatedPercentage}%` }} />
          </div>
     );
};

export default PreLoader;