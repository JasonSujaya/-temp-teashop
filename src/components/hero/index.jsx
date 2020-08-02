import React from "react";
import "./hero.css";
import ProductShowcase from "./product_showcase";
import ProductBackground from "./product_background";
import InformationShowcase from "./information_showcase";

class Hero extends React.Component {
  state = {
    display: 0,
    date: new Date(),
    color: [
      ["#2D5664", "#E7A6A7", "#F87879"],
      ["#233053", "#733753", "#343969"],
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
        <ProductBackground display={this.state.display} />
        {/* <div className="hero-image-container">
          <ProductShowcase display={this.state.display}></ProductShowcase>
        </div> */}
        <InformationShowcase />
      </div>
    );
  }
}

export default Hero;
