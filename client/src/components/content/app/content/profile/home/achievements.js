import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "./achievements.css";

const achievements = () => {
  return (
    <div className="squalla-app-container">
      <AppMenu link={"home"} />
      <div className="squalla-app-content-container">
        <div className="app-home-dashboard-content">
          <h2>Achievements are not yet available</h2>
        </div>
        <div className="app-home-home-nav">
          <Link to="/squallaApp/profile/dashboard" exact="true">
            <button className="app-home-nav-button">Dashboard</button>
          </Link>

          <Link to="/squallaApp/profile/achievements" exact="true">
            <button className="app-home-nav-middle" id="app-home-nav-selected">
              Achievements
            </button>
          </Link>

          <Link to="/squallaApp/profile/rounds" exact="true">
            <button className="app-home-nav-button">Rounds</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default achievements;
