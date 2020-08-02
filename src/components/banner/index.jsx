import React from "react";
import ActionBanner from "./action_banner";
import AboutBanner from "./about_banner";
import pot1 from "../../media/background/pot1.png";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container flex">
        <AboutBanner />
        <div className="banner-pot-container">
          <img className="banner-pot1" src={pot1}></img>
        </div>
      </div>
    );
  }
}

export default Banner;
