import React from "react";
import { render } from "@testing-library/react";

export default class InformationShowcase extends React.Component {
  render() {
    return (
      <div className="hero-information-container">
        <div className="information-title">hah</div>
        <div className="information-description">Description</div>
        <div className="information-cart">$39</div>
      </div>
    );
  }
}
