import React from "react";
import "./banner.css";
import pot1 from "../../media/background/pot1.png";

const AboutBanner = (props) => {
  return (
    <div className="banner-about-container">
      <div className="banner-about-us">
        <h4>ABOUT US</h4>
        <h1 className="">Explore the amazing world of Tea. </h1>
        <p>
          J&J invites you to discover its the most delicious organic & Fairtrade
          tea. Every package sold funds social projects. This way more than 3
          Mio. € have been raised by date.
        </p>
        <div className="why-us-action">
          <h3>Highest Quality</h3>
          <h3>100% Organic</h3>
          <h3>Tech Tracking</h3>
        </div>
      </div>
      {/* <div>
        <img className="banner-pot1" src={pot1}></img>
      </div> */}
    </div>
  );
};

export default AboutBanner;
