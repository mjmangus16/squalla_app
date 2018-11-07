import React, { Component } from "react";

import expandArrow from "../../img/expandArrow.png";
import collapseArrow from "../../img/collapseArrow.png";

import "./mobileMenu.css";

class MobileMenu extends Component {
  state = {
    expandFunction: true,
    expandFunction2: true,
    loggedIn: true
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
    let expand1;
    let expand2;
    let expand3;
    let expand4;
    let expand5;
    let expand7;

    if (this.state.expandFunction === true) {
      expand1 = "";
      expand2 = "item-hide";
      expand3 = "item-hide";
    } else if (this.state.expandFunction === false) {
      expand2 = "";
      expand1 = "item-hide";
      expand3 = "sub-menu";
    }

    if (this.state.expandFunction2 === true) {
      expand4 = "";
      expand5 = "item-hide";
      expand7 = "item-hide";
    } else if (this.state.expandFunction2 === false) {
      expand4 = "item-hide";
      expand5 = "";
      expand7 = "sub-menu2";
    }

    let loggedIn;
    let hide;
    let hide2;

    if (this.state.loggedIn === true) {
      loggedIn = "Logout";
      hide = "";
      hide2 = "item-hide";
    } else {
      loggedIn = "Login";
      hide = "item-hide";
      hide2 = "";
    }

    return (
      <div className="mobile-menu-container" id={this.props.showMenu}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li id="mobile-menu-dst">Disc Search Tool</li>
            <li id="mobile-menu-sa" onClick={this.expandMenuHandler}>
              Squalla App
              <input
                type="image"
                src={expandArrow}
                className="mobile-menu-expand-arrow"
                id={expand1}
                alt="expand menu item icon"
              />
              <input
                type="image"
                src={collapseArrow}
                className="mobile-menu-collapse-arrow"
                id={expand2}
                alt="collapse menu item icon"
              />
            </li>
            <li id={expand3}>
              <ul id="logged-in-subMenu">
                <li id={hide2}>{loggedIn}</li>
                <li
                  id={hide}
                  onClick={this.expandMenuHandler2}
                  className="border-bottom"
                >
                  Profile
                  <input
                    type="image"
                    src={expandArrow}
                    className="mobile-menu-expand-arrow"
                    id={expand4}
                    alt="expand menu item icon"
                  />
                  <input
                    type="image"
                    src={collapseArrow}
                    className="mobile-menu-collapse-arrow"
                    id={expand5}
                    alt="collapse menu item icon"
                  />
                </li>
                <li id={expand7}>
                  <ul id="profile-subMenu">
                    <li className="border-bottom">Home</li>
                    <li className="border-bottom">Courses</li>
                    <li className="border-bottom">Friends</li>
                    <li>Leagues</li>
                  </ul>
                </li>

                <li id={hide} className="border-bottom">
                  Submit Round
                </li>
                <li id={hide} className="border-bottom">
                  Settings
                </li>
                <li id={hide}>{loggedIn}</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MobileMenu;
