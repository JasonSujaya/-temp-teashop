import React from "react";
import "./app.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Banner from "./components/banner/index";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="base-header-container">
          <Header />
        </div>
        <div className="base-container">
          <div className="hero-grid">
            <Hero />
          </div>
          <div className="hero-grid-2">
            <Banner />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
