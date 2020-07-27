import React from "react";
import "./hero.css";
import Showcase from "../utilities/product_showcase";
import ProductShowcase from "./product_showcase2";
import InformationShowcase from "./information_showcase";

class Hero extends React.Component {
  state = {
    display: 0,
    date: new Date(),
    color: [
      ["#2D5664", "#E7A6A7", "#F87879"],
      ["#E7A6A7", "#733753", "#343969"],
      ["#F2AD9A", "#282743", "#049C9A"],
    ],
  };

  componentDidMount() {
    // Timer function for changing type
    this.timer = setInterval(() => this.tick(), 3000);
  }

  tick() {
    console.log(this.state.display);
    this.state.display === 2
      ? this.setState({ display: 0 })
      : this.setState({ display: this.state.display + 1 });
  }

  componentWillUnmount() {
    // Removes the timer interval when Hero is not in the DOM
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="hero-container">
        <div className="hero-image-container">
          <div
            className="hero-image-1st-upperbox"
            style={{ background: this.state.color[0][this.state.display] }}
          ></div>
          <div
            className="hero-image-1st-lowerbox"
            style={{ background: this.state.color[1][this.state.display] }}
          ></div>
          <div
            className="hero-image-2nd-lowerbox"
            style={{ background: this.state.color[2][this.state.display] }}
          ></div>
          <div className="hero-image-box">
            {/* <Showcase display={this.state.display}></Showcase> */}
            <ProductShowcase display={this.state.display}></ProductShowcase>
          </div>
        </div>

        <div className="hero-information-container">
          <InformationShowcase></InformationShowcase>
        </div>
      </div>
    );
  }
}

export default Hero;
