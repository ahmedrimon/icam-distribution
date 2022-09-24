import React from 'react';
import Hero from '../Hero/Hero';
import Product from '../Product/Product';
import Marquee from '../Marquee/Marquee';
import CompanyDescription from './../CompanyDescription/CompanyDescription';
import Footer from '../Footer/Footer';

const Home = () => {
     return (
          <div>
               <Hero />
               <Product />
               <Marquee />
               <CompanyDescription />
               <Footer />
          </div>
     );
};

export default Home;