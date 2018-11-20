import React from "react";
import { Link } from "react-router-dom";

import oneIcon from "../../../../img/1Icon.png";
import twoIcon from "../../../../img/2Icon.png";
import threeIcon from "../../../../img/3Icon.png";
import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";

import "../home.css";

const app2 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/app/page1">
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
              <img className="home-box-icon" src={oneIcon} alt="compare icon" />
              <h2>Create Account</h2>
              <p>Username, Email and password is all you need to get started</p>
            </div>
            <div className="home-boxes-box-side" id="home-boxes-box-middle">
              <img className="home-box-icon" src={twoIcon} alt="search icon" />
              <h2>Add Friends & Courses</h2>
              <p>Add your friends and local courses to your profile</p>
            </div>
            <div className="home-boxes-box-side" id="home-boxes-box-right">
              <img
                className="home-box-icon"
                src={threeIcon}
                alt="compare icon"
              />
              <h2>Play Disc Golf</h2>
              <p>
                Play a round and submit the scores. We take care of the rest!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="home-continue-button"
        id="home-search1-continue-button"
        to="/home/app/page3"
      >
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default app2;
