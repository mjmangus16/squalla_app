import React from "react";
import { Link } from "react-router-dom";

import backButton from "../../../../img/backButton.png";

import "../home.css";

const app4 = () => {
  return (
    <div className="content-container">
      <div className="home-search">
        <Link className="home-back-button" to="/home/app/page3">
          <input type="image" src={backButton} alt="Continue Button" />
        </Link>
        <div className="home-main-content-container">
          <div className="home-heading-container">
            <h1>Interested in learning more?</h1>
            <h1 className="home-heading-orange" id="blog-page-link">
              Check Out This Blog Page
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default app4;
