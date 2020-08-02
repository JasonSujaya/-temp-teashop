import React from "react";

export default class InformationShowcase extends React.Component {
  render() {
    return (
      <div className="hero-information-container">
        <div className="information-container-top">
          <div className="information-title">
            <div className="information-box">
              <h3 className="information-title-1">Ooloong Tea</h3>
            </div>
            <div className="information-box ">
              <div className="information-title-2 flex flex-center wrap ">
                <h1 className="font2">LAPSANG SOCHONG</h1>
              </div>
            </div>
          </div>
          <div className="information-description">
            <div className="information-description-1">
              <p>
                Tea is an aromatic beverage commonly prepared by pouring hot or
                boiling water over cured or fresh leaves of the Camellia
                sinensis, an evergreen shrub...
              </p>
            </div>
            <div>
              <div className="information-description-2">
                <div className="flex ">
                  <div className="information-description-tam">
                    <h4 className="font2">Taste</h4>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                  <div className="information-description-tam">
                    <h4 className="font2">Aroma</h4>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                  <div className="information-description-tam">
                    <h4 className="font2">Mouthfeel</h4>
                    <p>Smoky</p>
                    <p>Smoky</p>
                    <p>Smoky</p>
                  </div>
                </div>
              </div>
              <div className="information-description-3">
                <p>80 G</p>
              </div>
            </div>
          </div>
        </div>
        <div className="information-cart-container flex-center">
          <div className="information-cart-box flex-center">
            <h3 className="information-cart-1">$39.00</h3>
            <div className="information-cart-2">
              <div className="information-cart-3">
                <h3>1</h3>
              </div>
              <button className="button information-cart-4">
                <h4>ADD TO CART</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
