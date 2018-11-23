import React from "react";
import { Link } from "react-router-dom";

import leftArrow from "../../../img/leftArrow.png";
import rightArrow from "../../../img/rightArrow.png";

import "./home.css";

const home = () => {
  return (
    <div className="content-container">
      <div className="home-container">
        <h1 id="home-heading1">
          WELCOME TO S<span id="orange-q">Q</span>
          UALLA DISC GOLF
        </h1>
        <div id="home-heading2-container">
          <h1 id="home-heading2">Click Below To Learn More</h1>
          <Link id="home-heading2-leftArrow" to="/home/app/page1">
            <input type="image" src={leftArrow} alt="Squalla App Button" />
          </Link>
          <Link id="home-heading2-rightArrow" to="/home/DiscSearchTool/page1">
            <input
              type="image"
              src={rightArrow}
              alt="Disc Search Tool Button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;
