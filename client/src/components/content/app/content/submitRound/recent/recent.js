import React, { Component } from "react";
import { Link } from "react-router-dom";

import selectArrow from "../../../../../../img/selectArrow.png";

import AppMenu from "../../../appMenu";
import SelectedRecent from "./selectedRecent";

import "../submitRound.css";

class Recent extends Component {
  state = {
    roundSelected: false
  };

  selectedRoundData = {
    course: "",
    date: "",
    players: "",
    owner: "",
    league: ""
  };

  selectRoundHandler = e => {
    this.setState({ roundSelected: !this.state.roundSelected });
    this.selectedRoundData.course =
      e.target.parentElement.firstChild.textContent;
  };

  recentRound = (
    <div className="app-submitRound-recent-round">
      <h3>Joseph Davis State Park</h3>
      <input
        type="image"
        src={selectArrow}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={this.selectRoundHandler}
      />
      <div className="app-submitRound-recent-round-data">
        <div className="app-submitRound-recent-round-data-heading">
          <h4>Date</h4>
          <h4>Players</h4>
          <h4>Owner</h4>
          <h4>League</h4>
        </div>
        <div className="app-submitRound-recent-round-data-content">
          <p>10/25/18</p>
          <p>5</p>
          <p>Mjmangus16</p>
          <p>N/A</p>
        </div>
      </div>
    </div>
  );

  recentRounds = [
    this.recentRound,
    this.recentRound,
    this.recentRound,
    this.recentRound,
    this.recentRound
  ];

  render() {
    let displayContent;

    if (this.state.roundSelected === false) {
      displayContent = (
        <div className="app-submitRound-recent-content">
          {this.recentRounds}
        </div>
      );
    } else {
      displayContent = (
        <SelectedRecent
          handler={this.selectRoundHandler}
          data={this.selectedRoundData}
        />
      );
    }
    return (
      <div className="squalla-app-container">
        <AppMenu link={"submitRound"} />
        <div className="app-submitRound-recent">
          {displayContent}
          <div className="app-home-courses-nav">
            <Link to="/squallaApp/submitRound/recent" exact="true">
              <button
                className="app-home-nav-button"
                id="app-home-nav-selected"
              >
                Recent Rounds
              </button>
            </Link>

            <Link to="/squallaApp/submitRound/submit" exact="true">
              <button className="app-home-nav-right">Submit Round</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Recent;
