import React from "react";
import Product1 from "../../media/products/tea-1.png";
import Product2 from "../../media/products/tea-2.png";
import Product3 from "../../media/products/tea-3.png";

class ProductShowcase extends React.Component {
  render() {
    switch (this.props.display) {
      case 1:
        return (
          <div className="hero-container1">
            <img className="hero-image" src={Product1}></img>
          </div>
        );
      case 2:
        return (
          <div className="hero-container1">
            <img className="hero-image" src={Product2}></img>
          </div>
        );

      case 3:
        return (
          <div className="hero-container1">
            <img className="hero-image" src={Product3}></img>
          </div>
        );
      default:
        return <div>NONE</div>;
    }
  }
}

export default ProductShowcase;
