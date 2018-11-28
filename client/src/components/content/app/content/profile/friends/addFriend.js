import React from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import "../profile.css";

const addFriends = () => {
  let friend = (
    <div className="app-friends-friend">
      <p>Player1</p>
      <div className="add-friend-button">
        <h5>ADD</h5>
        <h5>PLAYER</h5>
      </div>
    </div>
  );

  return (
    <div className="squalla-app-container">
      <AppMenu link={"friends"} />
      <div className="squalla-app-content-container">
        <div className="app-home-friends-content">
          <input id="course-search" type="text" placeholder="Search..." />
          <div>{[friend, friend, friend, friend]}</div>
        </div>
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
