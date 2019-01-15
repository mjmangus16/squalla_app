import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";
import Moment from "react-moment";

import getRoundsData from "../../../functions/rounds";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

import expandArrow from "../../../../../../img/expandArrow.png";
import collapseArrow from "../../../../../../img/collapseArrow.png";

import "./rounds.css";

class Rounds extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

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

  render() {
    const { profile } = this.props.profile;
    let roundsContent = [];
    if (Object.keys(profile).length > 0) {
      let rounds = getRoundsData(profile);
      if (rounds.length > 0) {
        roundsContent.push(
          rounds.map(round => (
            <div className="app-home-rounds-round" key={rounds.indexOf(round)}>
              <Moment format="MM/DD/YY">{round.date}</Moment>
              <p className="app-home-rounds-round-course-p">{round.course}</p>
              <p>{round.tees}</p>
              <p>{round.myScore}</p>
              <p>{round.players}</p>
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
                <div>
                  {round.roundScores.map(playerScore => (
                    <div
                      className="app-home-rounds-round-more-data"
                      key={round.roundScores.indexOf(playerScore)}
                    >
                      <p>{playerScore.player}</p>
                      <p>{playerScore.score}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        );
      } else {
        roundsContent = (
          <p className="orange-text">You have not submitted any rounds yet</p>
        );
      }
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
          <div className="app-home-rounds-content">
            <div className="app-home-rounds-heading">
              <h3>Date</h3>
              <h3>Course</h3>
              <h3>Tees</h3>
              <h3>Score</h3>
              <h3>Players</h3>
            </div>
            <div className="app-home-rounds-data-container">
              <div className="app-home-rounds-data">{roundsContent}</div>
            </div>
          </div>
          <NavButtons
            buttons={3}
            selected={3}
            links={navButtonLinks}
            names={navButtonNames}
          />
        </div>
      </div>
    );
  }
}

Rounds.propTypes = {
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
)(Rounds);
