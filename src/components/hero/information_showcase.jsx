import React from "react";
import { render } from "@testing-library/react";

export default class InformationShowcase extends React.Component {
  render() {
    return (
      <div className="hero-information-container-2">
        <div className="information-container-top">
          <div className="information-title">
            <div className="information-box">
              <h2 className="information-title-1">Ooloong Tea</h2>
            </div>
            <div className="information-box ">
              <div className="information-title-2">
                <h1>LAPSANG </h1>
                <h1> SOCHONG</h1>
              </div>
            </div>
          </div>
          <div className="information-description">
            <div className="information-box">
              <p className="information-description-1">
                Tea is an aromatic beverage commonly prepared by pouring hot or
                boiling water over cured or fresh leaves of the Camellia
                sinensis, an evergreen shrub...
              </p>
            </div>
            <div>
              <div className="information-box">
                <div className="information-description-2">
                  <div>
                    <h1>Taste</h1>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                  <div>
                    <h1>Aroma</h1>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                  <div>
                    <h1>Mouthfeel</h1>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                </div>
                <div className="information-description-3">
                  <p>80 G</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="information-cart">$39</div>
      </div>
    );
  }
}
