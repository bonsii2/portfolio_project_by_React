import React from 'react';
import { testimonials } from '../data/dummydata';
import { FormatQuote } from '@mui/icons-material';
import '../Testimonials/Testimonials.css';

const Testimonials = () => {
  return (
    <section>
      <div className="testimonial ">
         <div className="testimonial_container">
            {testimonials.map((val) =>(
                <div className="box">
                    <i>
                        <FormatQuote />
                    </i>   
                        <p>{val.text}</p>
                        <div className="image">
                            <img src={val.image} alt="image" />
                        </div>
                        <h3>{val.name}</h3>
                        <label>{val.post}</label>
                  
                </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Testimonials;