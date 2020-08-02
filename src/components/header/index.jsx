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
          <div className="text-menu color1">
            <img className="icon-small mr-1" src={Hamburger}></img>
            categories
          </div>
          <div className="text-menu color1">about</div>
          <div className="text-menu color1">contact</div>
          <div className="text-menu color1">
            <img className="icon-small" src={Search}></img>
            <input type="text" />
          </div>

          {/* <img className="icon" src={Hamburger}></img> */}
        </div>
        <div className="header-logo">
          <img className="main-logo" src={MainLogo}></img>
        </div>
        <div className="header-cart-icon">
          <img className="icon ml-1" src={Cart}></img>
        </div>
      </div>
    );
  }
}

export default Header;
