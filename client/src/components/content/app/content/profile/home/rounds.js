import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import expandArrow from "../../../../../../img/expandArrow.png";
import collapseArrow from "../../../../../../img/collapseArrow.png";

import "../profile.css";

class Rounds extends Component {
  expandRoundHandler = e => {
    if (e.target.parentElement.children[6].id === "item-hide") {
      e.target.parentElement.children[6].id = "";
      e.target.src = collapseArrow;
      e.target.className = "rounds-collapse-arrow";
    } else if (e.target.parentElement.children[6].id === "") {
      e.target.parentElement.children[6].id = "item-hide";
      e.target.src = expandArrow;
      e.target.className = "rounds-expand-arrow";
    }
  };

  playerScore = (
    <div className="app-home-rounds-round-more-data">
      <p>mjmangus16</p>
      <p>63</p>
    </div>
  );

  playerScores = [this.playerScore, this.playerScore, this.playerScore];

  round = (
    <div className="app-home-rounds-round">
      <p>10/21/18</p>
      <p className="app-home-rounds-round-course-p">Beaver Island State Park</p>
      <p>White</p>
      <p>63</p>
      <p>4</p>
      <input
        type="image"
        src={expandArrow}
        className="rounds-expand-arrow"
        alt="expand menu item icon"
        onClick={this.expandRoundHandler}
      />
      <div className="app-home-rounds-round-more" id="item-hide">
        <div className="app-home-rounds-round-more-heading">
          <h4>Username</h4>
          <h4>Score</h4>
        </div>
        <div>{this.playerScores}</div>
      </div>
    </div>
  );

  rounds = [this.round, this.round, this.round, this.round];

  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"home"} />
        <div className="squalla-app-content-container">
          <div className="app-home-rounds-content">
            <div className="app-home-rounds-heading">
              <h3>Date</h3>
              <h3>Course</h3>
              <h3>Tees</h3>
              <h3>Score</h3>
              <h3>Players</h3>
            </div>
            <div className="app-home-rounds-data-container">
              <div className="app-home-rounds-data">{this.rounds}</div>
            </div>
          </div>
          <div className="app-home-home-nav">
            <Link to="/squallaApp/profile/dashboard" exact="true">
              <button className="app-home-nav-button">Dashboard</button>
            </Link>

            <Link to="/squallaApp/profile/achievements" exact="true">
              <button className="app-home-nav-middle">Achievements</button>
            </Link>

            <Link to="/squallaApp/profile/rounds" exact="true">
              <button
                className="app-home-nav-button"
                id="app-home-nav-selected"
              >
                Rounds
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Rounds;
