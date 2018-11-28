import React from "react";
import { Link } from "react-router-dom";

import "./appMenu.css";

const appMenu = props => {
  let profileSelected = "not-selected";
  let homeSelected = "not-selected";
  let coursesSelected = "not-selected";
  let friendsSelected = "not-selected";
  let leaguesSelected = "not-selected";
  let submitSelected = "not-selected";
  let settingsSelected = "not-selected";

  if (props.link === "home") {
    homeSelected = "is-selected";
  } else if (props.link === "courses") {
    coursesSelected = "is-selected";
  } else if (props.link === "friends") {
    friendsSelected = "is-selected";
  } else if (props.link === "leagues") {
    leaguesSelected = "is-selected";
  } else if (props.link === "submitRound") {
    submitSelected = "is-selected";
  }

  return (
    <div className="app-menu-container-background">
      <div className="app-menu-container">
        <div className="app-menu-content">
          <div className="app-menu-content-username">
            <h3>Username</h3>
          </div>
          <div className="app-menu-content-options">
            <ul>
              <li className="li-with-padding">Profile</li>
              <li id="no-border-li">
                <ul>
                  <Link
                    to="/squallaApp/profile/dashboard"
                    exact="true"
                    id={homeSelected}
                  >
                    <li className="li-with-padding">Home</li>
                  </Link>
                  <Link
                    to="/squallaApp/profile/courses"
                    exact="true"
                    id={coursesSelected}
                  >
                    <li className="li-with-padding">Courses</li>
                  </Link>
                  <Link
                    to="/squallaApp/profile/friends"
                    exact="true"
                    id={friendsSelected}
                  >
                    <li className="li-with-padding">Friends</li>
                  </Link>
                  <Link
                    to="/squallaApp/profile/leagues"
                    exact="true"
                    id={leaguesSelected}
                  >
                    <li className="li-with-padding">Leagues</li>
                  </Link>
                </ul>
              </li>
              <Link
                to="/squallaApp/submitRound/recent"
                exact="true"
                id={submitSelected}
              >
                <li className="li-with-padding">Submit Round</li>
              </Link>
              <li className="li-with-padding">Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appMenu;
