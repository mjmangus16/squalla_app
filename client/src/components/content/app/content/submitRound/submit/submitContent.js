import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";
import axios from "axios";
import Moment from "react-moment";

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
    summary: false,
    roundData: {}
  };

  roundData = {
    date: "",
    course: "",
    tees: "",
    players: [],
    scores: []
  };

  submitted = "";

  componentDidMount() {
    this.props.getProfile();
  }

  getDateHandler = () => {
    this.roundData.date = document.getElementById("submitRound-date").value;
    this.setState({ roundData: this.roundData });
  };

  getCourseHandler = e => {
    this.roundData.course =
      e.target.parentElement.parentElement.firstChild.textContent;
    this.roundData.tees = e.target.textContent;
    this.setState({ roundData: this.roundData });
    console.log(this.state.roundData);
  };

  getPlayersHandler = e => {
    let selected = false;
    for (let i = 0; i < this.roundData.players.length; i++) {
      if (
        this.roundData.players[i] ===
        e.target.parentElement.firstChild.textContent
      ) {
        selected = true;
      }
    }
    if (selected === false) {
      this.roundData.players.push(
        e.target.parentElement.firstChild.textContent
      );
      this.setState({ roundData: this.roundData });
    }
  };

  removePlayersHandler = e => {
    for (let i = 0; i < this.roundData.players.length; i++) {
      if (
        e.target.parentElement.firstChild.textContent ===
        this.roundData.players[i]
      ) {
        this.roundData.players.splice(i, 1);
      }
    }
    this.setState({ roundData: this.roundData });
  };

  getScoresHandler = e => {
    let scores = [];
    const div = document.getElementById("submitRound-scores-container")
      .children;
    for (let i = 0; i < div.length; i++) {
      scores.push(div[i].firstChild.lastChild.value);
    }
    this.roundData.scores = scores;
  };

  submitRoundHandler = () => {
    this.roundData.players = this.roundData.players.join(",");
    this.roundData.scores = this.roundData.scores.join(",");

    axios
      .post("/api/rounds/add", this.roundData)
      .catch(err => console.log(err));

    document.getElementById("round-submitted-success").style.display = "block";
    document.getElementById("submitRound-submitButton").style.display = "none";
  };

  displayContent = <Date handler={this.getDateHandler} />;

  nextButtonHandler = () => {
    if (this.state.date === true) {
      this.displayContent = (
        <Course
          data={this.props.profile.profile.courses}
          handler={this.getCourseHandler}
        />
      );
      document.getElementById("submitRound-backButton").className = "";
      document.querySelector(".submit-topNav-date").id = "";
      document.querySelector(".submit-topNav-course").id = "nav-link-style";
      this.setState({ date: false, course: true });
    } else if (this.state.course === true) {
      this.displayContent = (
        <Players
          data={this.props.profile.profile.friends}
          getHandler={this.getPlayersHandler}
          removeHandler={this.removePlayersHandler}
          user={this.props.profile.profile.username}
        />
      );
      document.querySelector(".submit-topNav-course").id = "";
      document.querySelector(".submit-topNav-players").id = "nav-link-style";
      this.setState({ course: false, players: true });
    } else if (this.state.players === true) {
      this.displayContent = <Scores data={this.roundData.players} />;
      document.querySelector(".submit-topNav-players").id = "";
      document.querySelector(".submit-topNav-scores").id = "nav-link-style";
      this.setState({ players: false, scores: true });
    } else if (this.state.scores == true) {
      this.getScoresHandler();
      this.displayContent = (
        <Summary
          data={this.roundData}
          handler={this.submitRoundHandler}
          submitted={this.submitted}
        />
      );
      document.querySelector(".submit-topNav-scores").id = "";
      document.querySelector(".submit-topNav-summary").id = "nav-link-style";
      document.getElementById("submitRound-nextButton").className =
        "button-hide";
      this.setState({ players: false, summary: true });
    }
  };

  backButtonHandler = () => {
    if (this.state.summary === true) {
      this.displayContent = <Scores data={this.roundData.players} />;
      document.getElementById("submitRound-nextButton").className = "";
      document.querySelector(".submit-topNav-scores").id = "nav-link-style";
      document.querySelector(".submit-topNav-summary").id = "";
      this.setState({ scores: true, summary: false });
    } else if (this.state.scores === true) {
      this.displayContent = (
        <Players
          data={this.props.profile.profile.friends}
          getHandler={this.getPlayersHandler}
          removeHandler={this.removePlayersHandler}
          user={this.props.profile.profile.username}
        />
      );
      document.querySelector(".submit-topNav-players").id = "nav-link-style";
      document.querySelector(".submit-topNav-scores").id = "";
      this.setState({ players: true, scores: false });
    } else if (this.state.players === true) {
      this.displayContent = (
        <Course
          data={this.props.profile.profile.courses}
          handler={this.getCourseHandler}
        />
      );
      document.querySelector(".submit-topNav-course").id = "nav-link-style";
      document.querySelector(".submit-topNav-players").id = "";
      this.setState({ course: true, players: false });
    } else if (this.state.course === true) {
      this.displayContent = <Date handler={this.getDateHandler} />;
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
                {this.roundData.date != "" ? (
                  <Moment format="MM/DD/YY">{this.roundData.date}</Moment>
                ) : null}

                <p>{this.roundData.course}</p>
                {this.roundData.tees != "" ? (
                  <p>Tees: {this.roundData.tees}</p>
                ) : null}

                {this.roundData.players.length > 0 ? (
                  <p>{this.roundData.players.length} Players</p>
                ) : null}
              </div>
              <button
                onClick={this.nextButtonHandler}
                id="submitRound-nextButton"
              >
                NEXT
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

SubmitContent.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(SubmitContent);
