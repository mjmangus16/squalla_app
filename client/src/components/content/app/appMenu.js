import React from "react";
import { Link } from "react-router-dom";

import "./appMenu.css";

const appMenu = () => {
  return (
    <div className="app-menu-container-background">
      <div className="app-menu-container">
        <div className="app-menu-content">
          <div className="app-menu-content-username">
            <h3>Username</h3>
          </div>
          <div className="app-menu-content-options">
            <ul>
              <li>Profile</li>
              <li id="no-border-li">
                <ul>
                  <Link to="/squallaApp/profile/dashboard" exact="true">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/squallaApp/profile/courses" exact="true">
                    <li>Courses</li>
                  </Link>
                  <Link to="/squallaApp/profile/friends" exact="true">
                    <li>Friends</li>
                  </Link>
                  <li>Leagues</li>
                </ul>
              </li>
              <li>Submit Round</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appMenu;
