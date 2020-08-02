import React from "react";
import ActionBanner from "./action_banner";
import AboutBanner from "./about_banner";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <AboutBanner />
      </div>
    );
  }
}

export default Banner;
