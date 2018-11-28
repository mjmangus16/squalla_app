import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppMenu from "../../../appMenu";

import Date from "./date";
import Course from "./course";
import Players from "./players";
import Scores from "./scores";
import Summary from "./summary";

import backButton2 from "../../../../../../img/backButton2.png";

import "../submitRound.css";

class SubmitContent extends Component {
  state = {
    date: true,
    course: false,
    players: false,
    scores: false,
    summary: false
  };

  roundData = {
    date: "",
    course: "",
    tees: "",
    players: "",
    scores: ""
  };

  displayContent = <Date />;

  nextButtonHandler = () => {
    if (this.state.date === true) {
      this.displayContent = <Course />;
      document.getElementById("submitRound-backButton").className = "";
      document.querySelector(".submit-topNav-date").id = "";
      document.querySelector(".submit-topNav-course").id = "nav-link-style";
      this.setState({ date: false, course: true });
    } else if (this.state.course === true) {
      this.displayContent = <Players />;
      document.querySelector(".submit-topNav-course").id = "";
      document.querySelector(".submit-topNav-players").id = "nav-link-style";
      this.setState({ course: false, players: true });
    } else if (this.state.players === true) {
      this.displayContent = <Scores />;
      document.querySelector(".submit-topNav-players").id = "";
      document.querySelector(".submit-topNav-scores").id = "nav-link-style";
      this.setState({ players: false, scores: true });
    } else if (this.state.scores == true) {
      this.displayContent = <Summary />;
      document.querySelector(".submit-topNav-scores").id = "";
      document.querySelector(".submit-topNav-summary").id = "nav-link-style";
      document.getElementById("submitRound-nextButton").className =
        "button-hide";
      document.getElementById("submitRound-submitButton").className = "";
      this.setState({ players: false, summary: true });
    }
  };

  backButtonHandler = () => {
    if (this.state.summary === true) {
      this.displayContent = <Scores />;
      document.getElementById("submitRound-nextButton").className = "";
      document.getElementById("submitRound-submitButton").className =
        "button-hide";
      document.querySelector(".submit-topNav-scores").id = "nav-link-style";
      document.querySelector(".submit-topNav-summary").id = "";
      this.setState({ scores: true, summary: false });
    } else if (this.state.scores === true) {
      this.displayContent = <Players />;
      document.querySelector(".submit-topNav-players").id = "nav-link-style";
      document.querySelector(".submit-topNav-scores").id = "";
      this.setState({ players: true, scores: false });
    } else if (this.state.players === true) {
      this.displayContent = <Course />;
      document.querySelector(".submit-topNav-course").id = "nav-link-style";
      document.querySelector(".submit-topNav-players").id = "";
      this.setState({ course: true, players: false });
    } else if (this.state.course === true) {
      this.displayContent = <Date />;
      document.getElementById("submitRound-backButton").className =
        "button-hide";
      document.querySelector(".submit-topNav-date").id = "nav-link-style";
      document.querySelector(".submit-topNav-course").id = "";
      this.setState({ date: true, course: false });
    }
  };

  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"submitRound"} />
        <div className="app-submitRound-submit">
          <div className="app-submitRound-submit-container">
            <div className="app-submitRound-submit-summary-container">
              <button
                className="button-hide"
                id="submitRound-backButton"
                onClick={this.backButtonHandler}
              >
                BACK
              </button>
              <div className="app-submitRound-submit-summary-content">
                <h4>{this.roundData.date}</h4>
              </div>
              <button
                onClick={this.nextButtonHandler}
                id="submitRound-nextButton"
              >
                NEXT
              </button>
              <button className="button-hide" id="submitRound-submitButton">
                SUBMIT
              </button>
            </div>
            <div className="app-submitRound-submit-topNav">
              <p id="nav-link-style" className="submit-topNav-date">
                Date
              </p>
              <p className="submit-topNav-course">Course</p>
              <p className="submit-topNav-players">Players</p>
              <p className="submit-topNav-scores">Scores</p>
              <p className="submit-topNav-summary">Summary</p>
            </div>

            <div className="app-submitRound-submit-content">
              {this.displayContent}
            </div>
          </div>
          <div className="app-home-courses-nav">
            <Link to="/squallaApp/submitRound/recent" exact="true">
              <button className="app-home-nav-button">Recent Rounds</button>
            </Link>

            <Link to="/squallaApp/submitRound/submit" exact="true">
              <button className="app-home-nav-right" id="app-home-nav-selected">
                Submit Round
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitContent;
