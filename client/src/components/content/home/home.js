import React from "react";

import leftArrow from "../../../img/leftArrow.png";
import rightArrow from "../../../img/rightArrow.png";

import "./home.css";

const home = () => {
  return (
    <div className="home-container">
      <h1 id="home-heading1">
        WELCOME TO S<span id="orange-q">Q</span>
        UALLA DISC GOLF
      </h1>
      <div id="home-heading2-container">
        <h1 id="home-heading2">Click Below To Learn More</h1>
        <input
          type="image"
          src={leftArrow}
          id="home-heading2-leftArrow"
          alt="Squalla App Button"
        />
        <input
          type="image"
          src={rightArrow}
          id="home-heading2-rightArrow"
          alt="Disc Search Tool Button"
        />
      </div>
    </div>
  );
};

export default home;
