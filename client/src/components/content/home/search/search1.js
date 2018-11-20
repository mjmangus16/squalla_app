import React from "react";
import { Link } from "react-router-dom";

import searchIcon from "../../../../img/searchIcon.png";
import infoIcon from "../../../../img/infoIcon.png";
import compareIcon from "../../../../img/compareIcon.png";
import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";

import "../home.css";

const search1 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container">
        <div className="home-heading-container">
          <h1>Our Disc Search Tool Helps You</h1>
          <h1 className="home-heading-green">
            Find Exactly What You Are Looking For!
          </h1>
        </div>
        <div className="home-content-section">
          <div className="home-boxes-container">
            <div className="home-boxes-box-side">
              <img
                className="home-box-icon"
                src={compareIcon}
                alt="compare icon"
              />
              <h2>Compare</h2>
              <p>Place discs side by side to easily compare the differences</p>
            </div>
            <div className="home-boxes-box-side" id="home-boxes-box-middle">
              <img
                className="home-box-icon"
                src={searchIcon}
                alt="search icon"
              />
              <h2>Search & Filter By</h2>
              <ul>
                <li>- Manufacture</li>
                <li>- Flight Ratings</li>
                <li>- Skill Level</li>
                <li>- And More</li>
              </ul>
            </div>
            <div className="home-boxes-box-side" id="home-boxes-box-right">
              <img
                className="home-box-icon"
                src={infoIcon}
                alt="compare icon"
              />
              <h2>Information</h2>
              <p>
                Everything you need to know to choose your discs is available at
                your fingertips
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="home-continue-button"
        id="home-search1-continue-button"
        to="/home/DiscSearchTool/page2"
      >
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default search1;
