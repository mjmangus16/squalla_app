import React, { Component } from "react";

import AppMenu from "../../../appMenu";

import "./leagues.css";

class Leagues extends Component {
  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"leagues"} />
        <div className="squalla-app-content-container">
          <div className="app-home-dashboard-content">
            <h2 id="leagues-h2">Leagues are not yet available</h2>
          </div>
          <div className="app-home-home-nav" />
        </div>
      </div>
    );
  }
}

export default Leagues;
