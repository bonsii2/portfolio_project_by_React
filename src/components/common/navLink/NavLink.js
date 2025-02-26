import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const url = props.url;
  const text = props.text; 
  return (
    <Link to={url}>{text}</Link>

    
  );
};

export default NavLink;