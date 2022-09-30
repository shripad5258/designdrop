import React from "react";

//CSS
import "./about.css";

function About(props) {
  const {heading,title,description,image} = props;
  return (
    <div>
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">{heading}</p>
            <h2>{title}</h2>
            <p>{description}
              
            </p>
          </div>
          <div className="about-img">
            <img src={image} alt="about-us" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
