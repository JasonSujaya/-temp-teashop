import React from "react";
import "./header.css";
import Hamburger from "../../media/icons/open-menu.svg";
import Search from "../../media/icons/search.svg";
import Cart from "../../media/icons/shopping-cart.svg";
import MainLogo from "../../media/icons/vector/default-monochrome-white.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-menu-list">
          {/* <h1>ABOUT</h1>
          <h1>GIFTS</h1>
          <h1>LOCATION</h1> */}
          <img className="icon" src={Hamburger}></img>
        </div>
        <div className="header-logo">
          <img className="main-logo" src={MainLogo}></img>
        </div>
        <div className="header-cart-icon">
          <img className="icon ml-1" src={Cart}></img>
          <img className="icon ml-1" src={Search}></img>
        </div>
      </div>
    );
  }
}

export default Header;
