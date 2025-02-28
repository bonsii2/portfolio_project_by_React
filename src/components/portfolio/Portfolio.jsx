import React, { useState } from 'react';
import { portfolio } from '../data/dummydata';
import "../portfolio/Portifolio.css";
import {  Visibility } from '@mui/icons-material';
import Heading from '../common/Header/Heading';
const allCategory = ['All' , ...new Set(portfolio.map((item) => item.category))];
const Portfolio = () => {
    const [List, setList] = useState(portfolio);
    const [Category, setCategory] =useState(allCategory);

    const filterItems = (Category) => {
       if ((Category === "All")) {
         setList(portfolio);
       }else{
         const newItems = portfolio.filter(
           (item) => item.category === Category
         );
         setList(newItems);
       }
      
     
      
    }
  return (
    <>
      <article>
        <Heading title="Potfolio"/>
        <div className="content">
          <div className="catbutton">
            {Category.map((item,i) => (
              <button
              key={i}
              className="primaryButton" 
              onClick={() => filterItems(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="content portfolio_pogrid3">
          {List.map((items, i) => (
            <div className="box" key={i}>
              <div className="image">
                <img src={items.cover} alt="image" />
              </div>
              <div className="overlay">
                <h3>{items.title}</h3>
                <span>{items.name}</span>
                <Visibility />
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Portfolio;