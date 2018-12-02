import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Content from "./content";

import MobileMenu from "./mobileMenu";
import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.png";

import "./layout.css";
import "../content/app/app.css";

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

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    window.location.href = "/login";
  }

  render() {
    let displayLogin;

    const { isAuthenticated, user } = this.props.auth;

    // const isAuthenticated = true;

    const auth = "/squallaApp/profile/dashboard";
    const guest = "/login";

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
            logout={this.onLogoutClick.bind(this)}
            auth={isAuthenticated}
          />

          <div className="layout-sidebar-nav">
            <a id="squalla-app-button" href={isAuthenticated ? auth : guest}>
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

Layout.proptypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Layout);
