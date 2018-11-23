import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "../profile.css";

const addFriends = () => {
  return (
    <div className="squalla-app-container">
      <AppMenu />
      <div className="squalla-app-content-container">
        <div className="app-home-courses-content" />
        <div className="app-home-courses-nav">
          <Link to="/squallaApp/profile/friends" exact="true">
            <button className="app-home-nav-button">Friends</button>
          </Link>

          <Link to="/squallaApp/profile/friends/add" exact="true">
            <button className="app-home-nav-right" id="app-home-nav-selected">
              Add Friend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default addFriends;
