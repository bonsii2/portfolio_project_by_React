import { Contacts, Pages } from '@mui/icons-material';
import React from  'react';
import Header from '../common/Header/header';
import Home from '../home/home';

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Contact from '../contact/Contact';
import About from '../About/About';
import Service from '../Service/Service';
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials';
import Blogs from "../Blogs/Blogs";
import Footer from '../common/Footer/Footer';

 const Page =() =>{
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
 }
export default Page ;

