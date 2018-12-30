import React, { Component } from "react";
import { Link } from "react-router-dom";

import selectArrowBack from "../../../../../../img/selectArrowBack.png";
import getExperiencePercent from "../home/functions/getExperiencePercent";

import "./friends.css";

class SelectedFriend extends Component {
  state = {
    dashboard: {
      level: 1,
      exp: 0,
      achievePoints: "",
      recentAchieve: "N/A",
      username: "",
      roundsPlayed: "",
      coursesPlayed: "",
      recentRound: {
        course: "",
        date: "",
        score: "",
        tees: ""
      }
    }
  };

  componentDidMount() {
    this.setState({
      dashboard: this.props.data
    });
  }

  render() {
    return (
      <div className="app-home-dashboard-content-friend-container">
        <div className="app-home-dashboard-content-friend">
          <div className="app-home-dashboard-exp" id="friend-dashboard">
            <input
              type="image"
              src={selectArrowBack}
              className="app-friends-friend-backArrow"
              alt="expand course item icon"
              onClick={this.props.handler}
            />
            <h1>{this.state.dashboard.username}</h1>
            <h3>Level {this.state.dashboard.level}</h3>
          </div>
          <div className="app-home-dashboard-roundsPlayed">
            <h4>Rounds Played</h4>
            <p>{this.state.dashboard.roundsPlayed}</p>
          </div>
          <div className="app-home-dashboard-coursesPlayed">
            <h4>Courses Played</h4>
            <p>{this.state.dashboard.coursesPlayed}</p>
          </div>
          <div className="app-home-dashboard-recentAchieve">
            <h4>Recent Achievement</h4>

            <p>{this.state.dashboard.recentAchieve}</p>
          </div>
          <div className="app-home-dashboard-achievePoints">
            <h4>Achievement Points</h4>
            <p>{this.state.dashboard.achievePoints}</p>
          </div>
          <div className="app-home-dashboard-recentRound">
            <h4>Recent Round</h4>
            <div className="app-home-dashboard-recentRound-data">
              <h5>Date</h5>
              <h5>Course</h5>
              <h5>Tees</h5>
              <h5>Score</h5>
              <p>{this.state.dashboard.recentRound.date}</p>
              <p className="app-home-dashboard-recentRound-data-course-name">
                {this.state.dashboard.recentRound.course}
              </p>
              <p>{this.state.dashboard.recentRound.tees}</p>
              <p>{this.state.dashboard.recentRound.score}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedFriend;
