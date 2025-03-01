import React from 'react';
import Heading from '../common/Header/Heading';
import { blog } from '../data/dummydata';
import "../Blogs/Blogs.css";

const Blogs = () => {
  return (
    <>
      <section className='blog'>
         <div className="Blogs_container">
            <Heading title="Blogs"/>
            <div className="content blog_grid">
            {blog.map((item, index) =>(
                    <div className="blog_box" key={index}>
                        <div className="image">
                            <img src={item.cover} alt="image" />
                        </div>
                        <div className="text">
                          <h3>{item.title}</h3>
                          <label>
                            By {item.author} {item.date}
                          </label>
                          <p>{item.desc}</p>
                        </div>
                    </div>
                )
            )}
          </div>
         </div>
      </section>
    </>
  );
};

export default Blogs;