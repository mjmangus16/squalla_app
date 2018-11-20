import React from "react";
import { Link } from "react-router-dom";

import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";
import cardExample from "../../../../img/cardExample.png";

import "../home.css";

const search2 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/DiscSearchTool/page1">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container">
        <div className="home-heading-container">
          <h1>Discs are displayed on their own</h1>
          <h1 className="home-heading-green">Easy To Read Cards</h1>
        </div>
        <div className="home-content-section">
          <img
            src={cardExample}
            alt="Example of the card used for our search tool"
            id="home-search-card-example"
          />
        </div>
      </div>
      <Link className="home-continue-button" to="/home/DiscSearchTool/page3">
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default search2;
