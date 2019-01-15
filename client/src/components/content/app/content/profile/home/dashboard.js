import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";
import Moment from "react-moment";

import getDashboardData from "../../../functions/dashboard";
import getExperiencePercent from "./functions/getExperiencePercent";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

import "./dashboard.css";

class Dashboard extends Component {
  state = {
    dashboard: {
      level: "",
      exp: 0,
      achievePoints: "",
      recentAchieve: "",
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
    this.props.getProfile();
  }

  getAchievements = achieves => {
    let count = 0;
    for (let i = 0; i < achieves.length; i++) {
      count = count + achieves[i].count;
    }
    return count;
  };

  render() {
    const { profile } = this.props.profile;
    let dashboardContent;
    if (Object.keys(profile).length > 0) {
      let dashboardData = getDashboardData(profile);
      console.log(dashboardData);
      let expBarStyle = `${getExperiencePercent(profile.exp, profile.level)}%`;
      dashboardContent = (
        <div className="app-home-dashboard-content">
          <div className="app-home-dashboard-exp">
            <h2>Level {dashboardData.level}</h2>
            <div className="app-home-dashboard-expBar-container">
              <div
                className="app-home-dashboard-expBar-filler"
                style={{ width: expBarStyle }}
              />
            </div>
          </div>
          <div className="app-home-dashboard-roundsPlayed">
            <h4>Rounds Played</h4>
            <p>{dashboardData.roundsPlayed}</p>
          </div>
          <div className="app-home-dashboard-coursesPlayed">
            <h4>Courses Played</h4>
            <p>{dashboardData.coursesPlayed}</p>
          </div>
          <div className="app-home-dashboard-recentAchieve">
            <h4>Achievements Earned</h4>

            <p>{this.getAchievements(profile.achievements)}</p>
          </div>
          <div className="app-home-dashboard-achievePoints">
            <h4>Achievement Points</h4>
            <p>{dashboardData.achievePoints}</p>
          </div>
          <div className="app-home-dashboard-recentRound">
            <h4>Recent Round</h4>
            <div className="app-home-dashboard-recentRound-data">
              <h5>Date</h5>
              <h5>Course</h5>
              <h5>Tees</h5>
              <h5>Score</h5>
              {dashboardData.recentRound.date === "N/A" ? (
                <p>N/A</p>
              ) : (
                <Moment format="MM/DD/YY">
                  {dashboardData.recentRound.date}
                </Moment>
              )}

              <p className="app-home-dashboard-recentRound-data-course-name">
                {dashboardData.recentRound.course}
              </p>
              <p>{dashboardData.recentRound.tees}</p>
              <p>{dashboardData.recentRound.score}</p>
            </div>
          </div>
        </div>
      );
    } else {
      dashboardContent = (
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
      );
    }

    let navButtonLinks = [
      "/squallaApp/profile/dashboard",
      "/squallaApp/profile/achievements",
      "/squallaApp/profile/rounds"
    ];
    let navButtonNames = ["Dashboard", "Achievements", "Rounds"];

    return (
      <div className="squalla-app-container">
        <AppMenu link={"home"} />
        <div className="squalla-app-content-container">
          {dashboardContent}
          <NavButtons
            buttons={3}
            selected={1}
            links={navButtonLinks}
            names={navButtonNames}
          />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
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
)(Dashboard);
