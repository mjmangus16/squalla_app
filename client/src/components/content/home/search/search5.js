import React from "react";
import { Link } from "react-router-dom";

import backButton from "../../../../img/backButton.png";

import "../home.css";

const search5 = () => {
  return (
    <div className="home-search">
      <Link className="home-back-button" to="/home/DiscSearchTool/page4">
        <input type="image" src={backButton} alt="Continue Button" />
      </Link>
      <div className="home-main-content-container">
        <div className="home-heading-container">
          <h1>Interested in learning more?</h1>
          <h1 className="home-heading-green" id="blog-page-link">
            Check Out This Blog Page
          </h1>
        </div>
      </div>
    </div>
  );
};

export default search5;
