import React, { Component } from "react";

import getExperiencePercent from "../../profile/home/functions/getExperiencePercent";
import getLevel from "../../profile/home/functions/levels";

import Aux from "../../../../../UI/Aux";
import "./userSummary.css";

class UserSummary extends Component {
  state = {
    userLevel: this.props.data.level
  };
  componentDidMount() {
    this.progressBar();
  }

  achievements = (points, num) => {
    if (num > 0) {
      return (
        <div className="userSummary-modal-achieves">
          <p>Achievements Earned: {num}</p>
          <p>Achieve Points Gained: {points}</p>
        </div>
      );
    }
  };

  averageScore = (score, avg) => {
    if (avg === score) {
      return <p>Tied average score of {avg}</p>;
    } else if (avg > score) {
      return <p>Beat average score of {avg}</p>;
    }
  };

  bestScore = (score, best) => {
    if (best === score) {
      return <p>Tied best score of {best}</p>;
    } else if (best > score) {
      return <p>Beat best score of {best}</p>;
    }
  };

  progressBar = () => {
    let currentExp = this.props.data.originalExp;
    let currentLevel = this.props.data.level;
    let currentExpBar = getExperiencePercent(currentExp, currentLevel);
    document.querySelector(".leveling-progress-bar").value = currentExpBar;

    let newExp = this.props.data.originalExp + this.props.data.gainedExp;
    let newLevel = getLevel(newExp);
    let newExpBar = getExperiencePercent(newExp, newLevel);

    let increaseUserLevel = newLevel => {
      this.setState({ userLevel: newLevel });
    };

    var id = setInterval(frame, 75);
    function frame() {
      if (newLevel === currentLevel) {
        if (currentExpBar >= newExpBar) {
          clearInterval(id);
        } else {
          currentExpBar++;
          document.querySelector(
            ".leveling-progress-bar"
          ).value = currentExpBar;
        }
      } else if (newLevel > currentLevel) {
        if (currentExpBar >= 100) {
          currentLevel = currentLevel + 1;
          currentExpBar = 0;
          increaseUserLevel(currentLevel);
        } else {
          currentExpBar++;
          document.querySelector(
            ".leveling-progress-bar"
          ).value = currentExpBar;
        }
      }
    }
  };

  render() {
    return (
      <div className="userSummary-modal">
        <h4>Level {this.state.userLevel}</h4>
        <progress max="100" value="0" className="leveling-progress-bar" />
        {this.averageScore(this.props.data.score, this.props.data.average)}
        {this.bestScore(this.props.data.score, this.props.data.best)}
        {this.achievements(
          this.props.data.achievePoints,
          this.props.data.achievements
        )}
        <p>{`Exp Earned: ${this.props.data.gainedExp}`}</p>
        <button onClick={this.props.removeModal}>CLOSE</button>
      </div>
    );
  }
}

export default UserSummary;
