import React from 'react';
import Hero from './hero';
import About from '../About/About';
import Service from '../Service/Service';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';

 const Home =() =>{
    return (
      <>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Testimonials />
        <Blogs />
      </>
    );
}
export default Home;


