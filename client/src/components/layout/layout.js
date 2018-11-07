import React, { Component } from "react";

import Content from "../content/content";
import MobileMenu from "./mobileMenu";

import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.png";

import "./layout.css";

class Layout extends Component {
  state = {
    showMenu: "item-hide"
  };

  showMenuHandler = () => {
    if (this.state.showMenu === "item-hide") {
      this.setState({ showMenu: "" });
    } else {
      this.setState({ showMenu: "item-hide" });
    }
  };

  render() {
    return (
      <div className="layout-container-out">
        <div className="layout-top-nav">
          <img className="nav-logo" src={logo} alt="Squalla Logo" />
          <div>
            <h4>HOME</h4>
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
          <MobileMenu showMenu={this.state.showMenu} />
          <div className="layout-sidebar-nav">
            <button id="squalla-app-button">SQUALLA APP</button>
            <button id="squalla-search-button">DISC SEARCH</button>
          </div>
          <div className="layout-content-container">
            <Content />
          </div>
          <div className="layout-trademark">
            <p>SQUALLA DISC GOLF Ⓒ 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
