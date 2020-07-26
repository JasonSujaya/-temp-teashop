import React from "react";
import "./hero.css";
import ProductShowcase from "./product_showcase";

class Hero extends React.Component {
  state = { display: 1, date: new Date() };

  componentDidMount() {
    // Timer function for changing type
    this.timer = setInterval(() => this.tick(), 3000);
  }

  tick() {
    console.log(this.state.display);
    this.state.display >= 3
      ? this.setState({ display: 1 })
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
          <div className="hero-image-1st-upperbox">BOXX</div>
          <div className="hero-image-1st-lowerbox">1st</div>
          <div className="hero-image-2nd-lowerbox">2nd</div>
          <div className="hero-image-box">
            <ProductShowcase display={this.state.display} />
          </div>
        </div>
        <div className="hero-information-container">BLYE</div>
      </div>
    );
  }
}

export default Hero;
