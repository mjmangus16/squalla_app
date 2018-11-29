import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import "./appMenu.css";

class AppMenu extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    window.location.href = "/login";
  };

  render() {
    let homeSelected = "not-selected";
    let coursesSelected = "not-selected";
    let friendsSelected = "not-selected";
    let leaguesSelected = "not-selected";
    let submitSelected = "not-selected";
    let settingsSelected = "not-selected";

    if (this.props.link === "home") {
      homeSelected = "is-selected";
    } else if (this.props.link === "courses") {
      coursesSelected = "is-selected";
    } else if (this.props.link === "friends") {
      friendsSelected = "is-selected";
    } else if (this.props.link === "leagues") {
      leaguesSelected = "is-selected";
    } else if (this.props.link === "submitRound") {
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
                <a href="">
                  <li
                    className="li-with-padding"
                    onClick={this.onLogoutClick.bind(this)}
                  >
                    Logout
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppMenu.proptypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AppMenu);
