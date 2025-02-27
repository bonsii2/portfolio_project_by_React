import React from 'react';
import Heading from '../common/Header/Heading';
import { services } from "../data/dummydata";
import "./Service.css";
import Counter from '../pages/Counter';

const Service = () => {
  return (
    <>
      <section className="service">
        <div className="service_containier">
          <Heading title="Services" />
          <div className="content_container Service_grid">
            {services.map((item, i) => (
              <div className="box" key={i}>
                <i>{item.icon}</i>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Counter />
      </section>
    </>
  );
};

export default Service;