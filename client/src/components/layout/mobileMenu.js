import React, { Component } from "react";

import expandArrow from "../../img/expandArrow.png";
import collapseArrow from "../../img/collapseArrow.png";

import "./mobileMenu.css";

class MobileMenu extends Component {
  state = {
    expandFunction: true,
    expandFunction2: true
  };

  expandMenuHandler = () => {
    if (this.state.expandFunction === true) {
      this.setState({ expandFunction: false });
    } else {
      this.setState({ expandFunction: true });
    }
  };

  expandMenuHandler2 = () => {
    if (this.state.expandFunction2 === true) {
      this.setState({ expandFunction2: false });
    } else {
      this.setState({ expandFunction2: true });
    }
  };

  render() {
    let squallaAppExpand;
    let squallaAppCollapse;
    let squallaAppSubMenu;
    let profileExpand;
    let profileCollapse;
    let profileSubMenu;

    if (this.state.expandFunction === true) {
      squallaAppExpand = "";
      squallaAppCollapse = "item-hide";
      squallaAppSubMenu = "item-hide";
    } else if (this.state.expandFunction === false) {
      squallaAppCollapse = "";
      squallaAppExpand = "item-hide";
      squallaAppSubMenu = "sub-menu";
    }

    if (this.state.expandFunction2 === true) {
      profileExpand = "";
      profileCollapse = "item-hide";
      profileSubMenu = "item-hide";
    } else if (this.state.expandFunction2 === false) {
      profileExpand = "item-hide";
      profileCollapse = "";
      profileSubMenu = "sub-menu2";
    }

    let loggedIn;
    let showLogout;

    let squallaApp;

    if (this.props.auth) {
      loggedIn = (
        <li onClick={this.props.logout} id={showLogout}>
          Logout
        </li>
      );
      showLogout = "";

      squallaApp = (
        <li
          id="mobile-menu-sa"
          onClick={this.props.auth ? this.expandMenuHandler : null}
        >
          Squalla App
          <input
            type="image"
            src={expandArrow}
            className="mobile-menu-expand-arrow"
            id={squallaAppExpand}
            alt="expand menu item icon"
          />
          <input
            type="image"
            src={collapseArrow}
            className="mobile-menu-collapse-arrow"
            id={squallaAppCollapse}
            alt="collapse menu item icon"
          />
        </li>
      );
    } else if (!this.props.auth) {
      loggedIn = "";
      showLogout = "item-hide";

      squallaAppExpand = "item-hide";
      squallaApp = (
        <a href="/login">
          <li id="mobile-menu-sa">Squalla App</li>
        </a>
      );
    }

    return (
      <div className="mobile-menu-container" id={this.props.showMenu}>
        <div className="mobile-menu-container2">
          <nav>
            <ul>
              <li>
                <a className="mobile-menu-link" href="/home">
                  Home
                </a>
              </li>

              <li>About</li>
              <li>Blog</li>
              <a href="/discSearch">
                <li id="mobile-menu-dst">Disc Search Tool</li>
              </a>
              {squallaApp}
              <li id={squallaAppSubMenu}>
                <ul id="logged-in-subMenu">
                  <li
                    id={showLogout}
                    onClick={this.expandMenuHandler2}
                    className="border-bottom"
                  >
                    Profile
                    <input
                      type="image"
                      src={expandArrow}
                      className="mobile-menu-expand-arrow"
                      id={profileExpand}
                      alt="expand menu item icon"
                    />
                    <input
                      type="image"
                      src={collapseArrow}
                      className="mobile-menu-collapse-arrow"
                      id={profileCollapse}
                      alt="collapse menu item icon"
                    />
                  </li>
                  <li id={profileSubMenu}>
                    <ul id="profile-subMenu">
                      <li className="border-bottom">
                        <a href="/squallaApp/profile/dashboard">Dashboard</a>
                      </li>
                      <li className="border-bottom">
                        <a href="/squallaApp/profile/courses">Courses</a>
                      </li>
                      <li className="border-bottom">
                        <a href="/squallaApp/profile/friends">Friends</a>
                      </li>
                      <li>Leagues</li>
                    </ul>
                  </li>

                  <li id={showLogout} className="border-bottom">
                    <a href="/squallaApp/submitRound/recent">Submit Round</a>
                  </li>
                  <li id={showLogout}>Settings</li>
                </ul>
              </li>
              {loggedIn}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
