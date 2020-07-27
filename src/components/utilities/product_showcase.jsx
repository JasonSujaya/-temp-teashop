import React from "react";
import { Transition, animated } from "react-spring/renderprops";
import Product1 from "../../media/products/tea-1.png";
import Product2 from "../../media/products/tea-2.png";
import Product3 from "../../media/products/tea-3.png";

import "./styles.css";

const pages = [
  (style) => (
    <animated.div style={{ ...style }}>
      <img className="hero-image" src={Product1}></img>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }}>
      <img className="hero-image" src={Product2}></img>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }}>
      <img className="hero-image" src={Product3}></img>
    </animated.div>
  ),
];

export default class Showcase extends React.PureComponent {
  render() {
    return (
      <div className="showcase-box">
        <Transition
          unique
          native
          config={{ duration: 1000 }}
          items={this.props.display}
          from={{ opacity: 0, transform: "translate3d(0,0%,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0,0%,0)" }}
          leave={{ opacity: 0, transform: "translate3d(0,0%,0)" }}
        >
          {(index) => pages[index]}
        </Transition>
      </div>
    );
  }
}
