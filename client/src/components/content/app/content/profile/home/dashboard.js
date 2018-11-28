import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "../profile.css";

const dashboard = () => {
  let expBarStyle = "45%";

  return (
    <div className="squalla-app-container">
      <AppMenu link={"home"} />
      <div className="squalla-app-content-container">
        <div className="app-home-dashboard-content">
          <div className="app-home-dashboard-exp">
            <h2>Level 12</h2>
            <div className="app-home-dashboard-expBar-container">
              <div
                className="app-home-dashboard-expBar-filler"
                style={{ width: expBarStyle }}
              />
            </div>
          </div>
          <div className="app-home-dashboard-roundsPlayed">
            <h4>Rounds Played</h4>
            <p>25</p>
          </div>
          <div className="app-home-dashboard-coursesPlayed">
            <h4>Courses Played</h4>
            <p>25</p>
          </div>
          <div className="app-home-dashboard-recentAchieve">
            <h4>Recent Achievement</h4>

            <p>Date</p>
            <p>Description</p>
          </div>
          <div className="app-home-dashboard-achievePoints">
            <h4>Achievement Points</h4>
            <p>34</p>
          </div>
          <div className="app-home-dashboard-recentRound">
            <h4>Recent Round</h4>
            <div className="app-home-dashboard-recentRound-data">
              <h5>Date</h5>
              <h5>Course</h5>
              <h5>Tees</h5>
              <h5>Score</h5>
              <p>10/25/18</p>
              <p>Beaver Island State Park</p>
              <p>White</p>
              <p>71</p>
            </div>
          </div>
        </div>
        <div className="app-home-home-nav">
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
