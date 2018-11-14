import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContent from "../content/homeContent";
import DiscSearch from "../content/discSearch/discSearch";

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
          />
          <div className="layout-sidebar-nav">
            <a id="squalla-app-button" href="/squallaApp">
              <button>SQUALLA APP</button>
            </a>
            <a id="squalla-search-button" href="/discSearch">
              <button>DISC SEARCH</button>
            </a>
          </div>
          <Router>
            <div className="layout-content-container">
              <Route exact path="/" component={HomeContent} />
              <Route exact path="/home" component={HomeContent} />
              <Route exact path="/discSearch" component={DiscSearch} />
            </div>
          </Router>
          <div className="layout-trademark">
            <p>SQUALLA DISC GOLF Ⓒ 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
