import React from "react";
import { Link } from "react-router-dom";

import levelIcon from "../../../../img/levelIcon.png";
import competeIcon from "../../../../img/competeIcon.png";
import progressIcon from "../../../../img/progressIcon.png";
import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";

import "../home.css";

const app1 = () => {
  return (
    <div className="content-container">
      <div className="home-search">
        <Link className="home-back-button" to="/home">
          <input type="image" src={backButton} alt="Continue Button" />
        </Link>
        <div className="home-main-content-container">
          <div className="home-heading-container">
            <h1>Our app is a new, unique and</h1>
            <h1 className="home-heading-orange">
              Fun Addition To Playing Disc Golf
            </h1>
          </div>
          <div className="home-content-section">
            <div className="home-boxes-container">
              <div className="home-boxes-box-side">
                <img
                  className="home-box-icon"
                  src={progressIcon}
                  alt="compare icon"
                />
                <h2>Track Progress</h2>
                <p>
                  Keeps track of course stats and how much you are improving
                </p>
              </div>
              <div className="home-boxes-box-side" id="home-boxes-box-middle">
                <img
                  className="home-box-icon"
                  src={competeIcon}
                  alt="search icon"
                />
                <h2>Compete</h2>
                <p>
                  Find and track tag matches, earn rating and track league
                  position
                </p>
              </div>
              <div className="home-boxes-box-side" id="home-boxes-box-right">
                <img
                  className="home-box-icon"
                  src={levelIcon}
                  alt="compare icon"
                />
                <h2>Level Up</h2>
                <p>
                  Level up your profile by playing rounds and earning
                  achievements
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="home-continue-button"
          id="home-search1-continue-button"
          to="/home/app/page2"
        >
          <input type="image" src={continueButton} alt="Continue Button" />
        </Link>
      </div>
    </div>
  );
};

export default app1;
