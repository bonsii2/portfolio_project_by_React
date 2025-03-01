import React from 'react';
import {contact} from '../data/dummydata';
import "../contact/Contact.css";
import Heading from '../common/Header/Heading';
const Contact = () => {
  return (
    <section className="conatct">
      <Heading title="Keep In Touch"/>
      <div className="conatct_container">
        <div className="left">
          <div className="flex">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='email' />
          </div>
          <input type="text" placeholder='subject' />
          <textarea name="" id="" rows={5} cols={30}></textarea>
          <input className='submitbtn' type="submit" value="submit" />
        </div>
        <div className="right">
          {contact.map((item) =>(
            <div className="contact_box">
              <i>{item.icon}</i>
              <div className="rigth_text">
                 <p>{item.text1} , </p>
                 <p>{item.text2}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;