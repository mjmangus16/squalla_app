import React from "react";

import Content from "../content/content";

import logo from "../../img/logo.png";

import "./layout.css";

const layout = () => {
  return (
    <div className="layout-container-out">
      <img className="nav-logo" src={logo} alt="Squalla Logo" />
      <div className="layout-container-in">
        <div className="layout-sidebar-nav">
          <div className="layout-sidebar-buttons-container">
            <button id="squalla-app-button">SQUALLA APP</button>
            <button id="squalla-search-button">DISC SEARCH</button>
          </div>
        </div>
        <div className="layout-content-container">
          <Content />
        </div>
        <p className="layout-trademark">SQUALLA DISC GOLF Ⓒ 2018</p>
      </div>
    </div>
  );
};

export default layout;
