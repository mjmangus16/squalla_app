import React from "react";
import { Link } from "react-router-dom";

import continueButton from "../../../../img/continueButton.png";
import backButton from "../../../../img/backButton.png";
import filterExample from "../../../../img/filterExample.png";

import "./search.css";

const search3 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/DiscSearchTool/page2">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container2">
        <div className="home-heading-container2">
          <h1>Easy to use</h1>
          <h1 className="home-heading-green">Search and Filtering</h1>
        </div>
        <div className="home-content-section2">
          <img
            src={filterExample}
            alt="Example of the card used for our search tool"
            id="home-search-filter-example"
          />
        </div>
      </div>
      <Link className="home-continue-button" to="/home/DiscSearchTool/page4">
        <input type="image" src={continueButton} alt="Continue Button" />
      </Link>
    </div>
  );
};

export default search3;
