import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";

import Aux from "../../../../../UI/Aux";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";
import LeagueSelected from "./leagueSelected";
import selectArrow from "../../../../../../img/selectArrow.png";

import "./leagues.css";

class Leagues extends Component {
  state = {
    leagueSelected: false,
    leagueData: {}
  };

  componentDidMount() {
    this.props.getProfile();
  }

  leagueSelectedHandler = leagueData => {
    this.setState({
      leagueSelected: !this.state.leagueSelected,
      leagueData: leagueData
    });
  };

  render() {
    let navButtonLinks = [
      "/squallaApp/profile/leagues",
      "/squallaApp/profile/leagues/search"
    ];
    let navButtonNames = ["My Leagues", "Search Leagues"];

    const { profile } = this.props.profile;
    let displayContent;
    if (Object.keys(profile).length > 0) {
      if (profile.leagues.length === 0) {
        displayContent = <h2 id="leagues-h2">Leagues are not yet available</h2>;
      } else {
        if (this.state.leagueSelected === false) {
          displayContent = (
            <Aux>
              <div className="squalla-app-leagues-heading">
                <h3>Name</h3>
                <h3>Type</h3>
                <h3>Avail.</h3>
              </div>
              {profile.leagues.map(league => (
                <div
                  className="squalla-app-leagues-league"
                  key={profile.leagues.indexOf(league)}
                >
                  <p>{league.name}</p>
                  <p>{league.type}</p>
                  <p>{league.availability}</p>
                  <input
                    type="image"
                    src={selectArrow}
                    className="app-leagues-league-selectArrow"
                    alt="expand course item icon"
                    onClick={() =>
                      this.setState({
                        leagueSelected: !this.state.leagueSelected,
                        leagueData: league
                      })
                    }
                  />
                </div>
              ))}
            </Aux>
          );
        } else {
          displayContent = (
            <LeagueSelected
              handler={this.leagueSelectedHandler}
              data={this.state.leagueData}
            />
          );
        }
      }
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"leagues"} />
        <div className="squalla-app-content-container">
          <div className="squalla-app-leagues-container">{displayContent}</div>
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

Leagues.propTypes = {
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
)(Leagues);
