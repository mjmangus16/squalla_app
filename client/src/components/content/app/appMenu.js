import React from "react";

import "./appMenu.css";

const appMenu = () => {
  return (
    <div className="app-menu-container-background">
      <div className="app-menu-container">
        <div className="app-menu-content">
          <div className="app-menu-content-username">
            <h3>Username</h3>
            <p>/</p>
            <p>logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appMenu;
