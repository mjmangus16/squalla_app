import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";
import axios from "axios";
import _ from "lodash";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";
import Achieve from "./achieveComponent/Achieve";

import "./achievements.css";

class Achievements extends Component {
  state = {
    achieves: [],
    updatedAchieves: []
  };

  componentDidMount() {
    this.props.getProfile();
    axios.get("/api/achievements/all").then(achieves => {
      this.setState({ achieves: achieves.data });
    });
  }

  combineAchieves = (achieves, myAchieves) => {
    let updatedAchieves = _.uniqBy([...myAchieves, ...achieves], "code");
    let updatedAchievesArray = updatedAchieves.map(UA => (
      <Achieve data={UA} key={updatedAchieves.indexOf(UA)} />
    ));
    return updatedAchievesArray;
  };

  navButtonLinks = [
    "/squallaApp/profile/dashboard",
    "/squallaApp/profile/achievements",
    "/squallaApp/profile/rounds"
  ];
  navButtonNames = ["Dashboard", "Achievements", "Rounds"];
  render() {
    const { profile } = this.props.profile;
    let achievesContent;
    if (Object.keys(profile).length > 0) {
      achievesContent = this.combineAchieves(
        this.state.achieves,
        profile.achievements
      );
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"home"} />
        <div className="squalla-app-content-container">
          <div className="app-home-achievements-container">
            <div className="app-home-achievements-heading">
              <h4 className="app-home-achievements-heading-1">
                Achievement Name
              </h4>
              <h4>Points</h4>
              <h4>Earned</h4>
            </div>
            <div className="app-home-achievements-container-content">
              {achievesContent}
            </div>
          </div>
          <NavButtons
            buttons={3}
            selected={2}
            links={this.navButtonLinks}
            names={this.navButtonNames}
          />
        </div>
      </div>
    );
  }
}

Achievements.propTypes = {
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
)(Achievements);
