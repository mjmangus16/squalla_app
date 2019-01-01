import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";

import getRoundsData from "../../../functions/rounds";

import AppMenu from "../../../appMenu";

import "../submitRound.css";

class Recent extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { profile } = this.props.profile;
    let recentRoundsContent = [];

    if (Object.keys(profile).length > 0) {
      if (profile.rounds.length > 0) {
        let recentRoundsData = getRoundsData(profile);
        recentRoundsData = recentRoundsData.slice(0, 5);

        recentRoundsContent.push(
          recentRoundsData.map(round => (
            <div
              className="app-submitRound-recent-round"
              key={recentRoundsData.indexOf(round)}
            >
              <h3>{round.course}</h3>

              <div className="app-submitRound-recent-round-data">
                <div className="app-submitRound-recent-round-data-heading">
                  <h4>Date</h4>
                  <h4>Tees</h4>
                  <h4>Players</h4>
                  <h4>Owner</h4>
                  <h4>League</h4>
                </div>
                <div className="app-submitRound-recent-round-data-content">
                  <p>{round.date}</p>
                  <p>{round.tees}</p>
                  <p>{round.players}</p>
                  <p>{round.owner}</p>
                  <p>{round.league}</p>
                </div>
              </div>
            </div>
          ))
        );
      } else {
        recentRoundsContent = (
          <p className="orange-text">You have not submitted any rounds yet</p>
        );
        console.log(profile.rounds.length);
      }
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"submitRound"} />
        <div className="app-submitRound-recent">
          <div className="app-submitRound-recent-content">
            {recentRoundsContent}
          </div>
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

Recent.propTypes = {
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
)(Recent);
