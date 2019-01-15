import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";
import Moment from "react-moment";

import getRoundsData from "../../../functions/rounds";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

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
                  <Moment format="MM/DD/YY">{round.date}</Moment>
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
      }
    }

    let navButtonLinks = [
      "/squallaApp/submitRound/recent",
      "/squallaApp/submitRound/submit"
    ];
    let navButtonNames = ["Recent Rounds", "Submit Round"];

    return (
      <div className="squalla-app-container">
        <AppMenu link={"submitRound"} />
        <div className="app-submitRound-recent">
          <div className="app-submitRound-recent-content-container">
            <div className="app-submitRound-recent-content">
              {recentRoundsContent}
            </div>
          </div>
          <NavButtons
            buttons={2}
            selected={1}
            links={navButtonLinks}
            names={navButtonNames}
          />
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
