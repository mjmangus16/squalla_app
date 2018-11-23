import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "../profile.css";

const dashboard = () => {
  return (
    <div className="squalla-app-container">
      <AppMenu />
      <div className="squalla-app-content-container">
        <div className="app-home-dashboard-content" />
        <div className="app-home-dashboard-nav">
          <Link to="/squallaApp/profile/dashboard" exact="true">
            <button className="app-home-nav-button" id="app-home-nav-selected">
              Dashboard
            </button>
          </Link>

          <Link to="/squallaApp/profile/achievements" exact="true">
            <button className="app-home-nav-middle">Achievements</button>
          </Link>

          <Link to="/squallaApp/profile/rounds" exact="true">
            <button className="app-home-nav-button">Rounds</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
