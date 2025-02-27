import { Pages } from '@mui/icons-material';
import React from  'react';
import Header from '../common/Header/header';
import Home from '../home/home';

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Contact from '../contact/Contact';
import About from '../About/About';
import Service from '../Service/Service';

 const Page =() =>{
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </>
    );
 }
export default Page ;

