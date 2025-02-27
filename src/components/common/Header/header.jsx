import React, { useState } from 'react';
import './header.css'
import logo from "../../images/logo.png";
import NavLink from '../navLink/NavLink';
import { Menu } from '@mui/icons-material';
const Header = () => {
  const [responsive, setResponsive] = useState(false);
  function responsiveHandler(){
    setResponsive(!responsive);
  }
  return (
    <header>
       <div className="container">
          <div className="logo">
            <img src={logo} alt="logo " />
          </div>
          <div className={responsive ? "hiddenMenu" : "nav_link"}>
              <NavLink url="/" text="Home"/>
              <NavLink url="/about" text="About"/>
              <NavLink url="/services" text="Service"/>
              <NavLink url="/portfolio" text="Portfolio"/>
              <NavLink url="/testimonials" text="Testimonials"/>
              <NavLink url="/blogs" text="Blogs"/>
              <NavLink url="/contact" text="contact" />
          </div>
          <button className='header_button' onClick={responsiveHandler}>
            <Menu className='icon'></Menu>
          </button>
       </div>
    </header>
  );
};

export default Header;