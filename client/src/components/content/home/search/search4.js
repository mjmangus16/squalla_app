import React from "react";
import { Link } from "react-router-dom";

import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";
import compareCard1 from "../../../../img/compareCard1.png";
import compareCard2 from "../../../../img/compareCard2.png";
import compareCard3 from "../../../../img/compareCard3.png";

import "./search.css";

const search4 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/DiscSearchTool/page3">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container">
        <div className="home-heading-container">
          <h1>Compare discs side by side and get</h1>
          <h1 className="home-heading-green">
            Exactly What You Are Looking For
          </h1>
        </div>
        <div className="home-content-section" id="compare-cards-example">
          <img
            src={compareCard1}
            alt="Example of the card used for our search tool"
            className="home-search-compare-example"
          />
          <img
            src={compareCard2}
            alt="Example of the card used for our search tool"
            className="home-search-compare-example"
          />
          <img
            src={compareCard3}
            alt="Example of the card used for our search tool"
            className="home-search-compare-example"
            id="home-search-compare-example3"
          />
        </div>
      </div>
      <Link className="home-continue-button" to="/home/DiscSearchTool/page5">
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default search4;
