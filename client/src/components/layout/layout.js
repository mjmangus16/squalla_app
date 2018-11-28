import React, { Component } from "react";

import Content from "./content";

import MobileMenu from "./mobileMenu";
import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.png";

import "./layout.css";
import "../content/app/app.css";

class Layout extends Component {
  state = {
    showMenu: "item-hide",
    user: true
  };

  showMenuHandler = () => {
    if (this.state.showMenu === "item-hide") {
      this.setState({ showMenu: "" });
    } else {
      this.setState({ showMenu: "item-hide" });
    }
  };

  render() {
    let displayLogin;

    if (this.state.user === false) {
      displayLogin = "/login";
    } else if (this.state.user === true) {
      displayLogin = "/squallaApp/profile/dashboard";
    }

    return (
      <div className="layout-container-out">
        <div className="layout-top-nav">
          <img className="nav-logo" src={logo} alt="Squalla Logo" />
          <div>
            <h4>
              <a className="menu-link" href="/home">
                HOME
              </a>
            </h4>
            <h4>ABOUT</h4>
            <h4>BLOG</h4>
          </div>
        </div>
        <div className="layout-container-in">
          <input
            type="image"
            src={hamburger}
            id="hamburger-menu"
            alt="hamburger menu icon"
            onClick={this.showMenuHandler}
          />
          <MobileMenu
            showMenu={this.state.showMenu}
            showMenuHandler={this.showMenuHandler}
            displayLogin={displayLogin}
          />

          <div className="layout-sidebar-nav">
            <a id="squalla-app-button" href={displayLogin}>
              <button>SQUALLA APP</button>
            </a>

            <a id="squalla-search-button" href="/discSearch">
              <button>DISC SEARCH</button>
            </a>
          </div>
          <Content />
          <div className="layout-trademark">
            <p>SQUALLA DISC GOLF Ⓒ 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
