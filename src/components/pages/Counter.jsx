import React from 'react';
import {project} from '../data/dummydata';
import CountUp from 'react-countup';
import "../Service/Service.css"
const Counter = () => {
  return (
    <>
      <div className="counterhero counter">
        <div className="Counter_countainer grid3 grid4">
          {project.map((item, i) => (
            <div className="counter_box" key={i}>
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;