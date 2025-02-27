import { Title } from '@mui/icons-material';
import React from 'react';

const Heading = ({title}) => {
  return ( 
    <div className="heading_content">
        <h1>{title}</h1>
    </div>
  );
};

export default Heading;