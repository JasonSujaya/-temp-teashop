import React from "react";
import ProductShowcase from "./product_showcase";

class ProductBackground extends React.Component {
  state = {
    color: [
      ["#2D5664", "#E7A6A7", "#F87879"],
      ["#233053", "#733753", "#343969"],
      ["#F2AD9A", "#282743", "#049C9A"],
    ],
  };

  render() {
    return (
      <div className="relative">
        <div className="hero-image-container">
          <ProductShowcase display={this.props.display}></ProductShowcase>
        </div>
        <div className="hero-background-container">
          <div
            className="hero-background-1st-upperbox"
            style={{ background: this.state.color[0][this.props.display] }}
          ></div>
          <div
            className="hero-background-1st-lowerbox"
            style={{ background: this.state.color[1][this.props.display] }}
          ></div>
          <div
            className="hero-background-2nd-lowerbox"
            style={{ background: this.state.color[2][this.props.display] }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ProductBackground;
