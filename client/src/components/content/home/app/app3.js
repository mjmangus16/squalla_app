import React from "react";
import { Link } from "react-router-dom";

import levelIcon from "../../../../img/levelIcon.png";
import competeIcon from "../../../../img/competeIcon.png";
import progressIcon from "../../../../img/progressIcon.png";
import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";

import "../home.css";

const app3 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/app/page2">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container">
        <div className="home-heading-container">
          <h1>One player enters the round and</h1>
          <h1 className="home-heading-orange">
            Everyones Profile Is Instantly Updated
          </h1>
        </div>
        <div className="home-content-section">
          <div className="home-boxes-container3">
            <img
              className="home-box-icon"
              src={progressIcon}
              alt="compare icon"
            />

            <img
              className="home-box-icon"
              src={competeIcon}
              alt="search icon"
            />

            <img className="home-box-icon" src={levelIcon} alt="compare icon" />
          </div>
          <p id="app-page3-p">
            Ratings, tags, course stats, achievemets and experience is all
            updated inside the app once the round is entered
          </p>
        </div>
      </div>
      <Link
        className="home-continue-button"
        id="home-search1-continue-button"
        to="/home/app/page4"
      >
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default app3;
