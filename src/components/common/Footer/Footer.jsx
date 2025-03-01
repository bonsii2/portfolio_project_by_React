import React from 'react';
import { social } from '../../data/dummydata';
import '../Footer/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {social.map((item) => (
          <i>{item.icon}</i>
        ))}
      </div>
      <div className="ftext">
        <p>All right reserved 2025 </p>
        <p>bonsadaba@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;