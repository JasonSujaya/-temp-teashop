import React from "react";
import "./banner.css";

const AboutBanner = (props) => {
  return (
    <div className="about-container">
      <div className="about-us-action-words">
        <h1>ABOUT US</h1>
        <p className="p2">Explore the amazing world of Tea. </p>
      </div>
      <div className="why-us-action">
        <h3>Highest Quality</h3>
        <h3>100% Organic</h3>
        <h3>Full Transparency</h3>
      </div>
    </div>
  );
};

export default AboutBanner;
