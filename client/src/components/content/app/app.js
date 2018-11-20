import React, { Component } from "react";

import AppMenu from "./appMenu";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu />
      </div>
    );
  }
}

export default App;
