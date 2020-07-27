import React from "react";
import "./app.css";
import Header from "./components/header";
import Hero from "./components/hero";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="base-header-container">
          <Header />
        </div>
        <div className="base-container">
          <Hero />
        </div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
      </React.Fragment>
    );
  }
}

export default App;
