import React from "react";
import { testimonials } from "../data/dummydata";
import { FormatQuote } from "@mui/icons-material";
import "../Testimonials/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: true,
    pauseOnHover: true,
  
  };

  return (
    <section>
      <div className="testimonial">
        <div className="testimonial_container">
          <Slider {...settings}>
            {testimonials.map((val, index) => (
              <div className="box" key={index}>
                <i>
                  <FormatQuote fontSize="large" />
                </i>
                <p>{val.text}</p>
                <div className="image">
                  <img src={val.image} alt="testimonial" />
                </div>
                <h3>{val.name}</h3>
                <label>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
