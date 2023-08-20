import React from "react";
import { Link, Element } from 'react-scroll';

function About() {
  return (
    <>
    <Element name="about" data-scroll-to>
    <div className="about" id="about">
        <div className="about_content">
          <h2>Know Who I'M</h2>
          <div className="underline"></div>
          <div className="about_content_entry">
          <div className="about_content_img"><img src={require("../images/about.png")} alt="about_img" /></div>
          <div className="about_content_text">
          <p className="about_content_text_p1">Let me introduce myself</p>
            <p className="about_content_text_p2">
            I'm a Web Developer based in Pakistan. <br /> I enjoy turning complex problems into simple, beautiful and intuitive solutions.
            I like to build functional and user-friendly and at the same time attractive websites for you. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
            </p>
            <Link to="" className="about_btn">Download CV</Link>
          </div>
          </div>
        </div>
      </div>
    </Element>
      
    </>
  );
}
export default About;
