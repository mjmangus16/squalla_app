import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import getExperiencePercent from "./functions/getExperiencePercent";

import AppMenu from "../../../appMenu";

import "./dashboard.css";

class Dashboard extends Component {
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
    },
    expBarStyle: ""
  };

  componentDidMount() {
    axios.get("/api/profiles/home/dashboard").then(res => {
      this.setState({
        dashboard: res.data,
        expBarStyle:
          getExperiencePercent(res.data.exp, res.data.level).toString() + "%"
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"home"} />
        <div className="squalla-app-content-container">
          <div className="app-home-dashboard-content">
            <div className="app-home-dashboard-exp">
              <h2>Level {this.state.dashboard.level}</h2>
              <div className="app-home-dashboard-expBar-container">
                <div
                  className="app-home-dashboard-expBar-filler"
                  style={{ width: this.state.expBarStyle }}
                />
              </div>
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
          <div className="app-home-home-nav">
            <Link to="/squallaApp/profile/dashboard" exact="true">
              <button
                className="app-home-nav-button"
                id="app-home-nav-selected"
              >
                Dashboard
              </button>
            </Link>

            <Link to="/squallaApp/profile/achievements" exact="true">
              <button className="app-home-nav-middle">Achievements</button>
            </Link>

            <Link to="/squallaApp/profile/rounds" exact="true">
              <button className="app-home-nav-button">Rounds</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
