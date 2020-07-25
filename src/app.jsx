import React from "react";
import "./base.css";
import Header from "./components/header";
import FirstPage from "./components/firstpage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <FirstPage></FirstPage>
      </React.Fragment>
    );
  }
}

export default App;
