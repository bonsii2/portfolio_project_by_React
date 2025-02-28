import React from 'react';
import Hero from './hero';
import About from '../About/About';
import Service from '../Service/Service';
import Counter from '../pages/Counter';
import Portfolio from '../portfolio/Portfolio';

 const Home =() =>{
    return (
    <>
      <Hero/>
      <About />
      <Service />
      <Portfolio />
      
    </>
    )
}
export default Home;


