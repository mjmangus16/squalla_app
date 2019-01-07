import React, { Component } from "react";

import getExperiencePercent from "../../profile/home/functions/getExperiencePercent";
import getLevel from "../../profile/home/functions/levels";

import Aux from "../../../../../UI/Aux";

class UserSummary extends Component {
  state = {
    userLevel: this.props.data.level
  };
  componentDidMount() {
    this.progressBar();
  }

  averageScore = (score, avg) => {
    if (avg < score) {
      return <p>You did not beat your average score in that round.</p>;
    } else if (avg === score) {
      return <p>You tied your average score!</p>;
    } else if (avg > score) {
      return <p>{`You beat your average score of ${avg}!`}</p>;
    } else if (avg === "N/A") {
      return <p>Congrats on completing your first round at this course!</p>;
    }
  };

  bestScore = (score, best) => {
    if (best < score) {
      return <p>You did not beat your best score in that round.</p>;
    } else if (best === score) {
      return <p>You tied your best score!</p>;
    } else if (best > score) {
      return <p>{`You beat your best score of ${best}!`}</p>;
    } else if (best === "N/A") {
      return null;
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

    console.log(currentExpBar, newExpBar);

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
          increaseUserLevel(currentLevel);
          currentExpBar = 0;
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
    // let expBarStyle = getExperiencePercent(
    //   this.props.data.originalExp,
    //   this.props.data.level
    // );
    return (
      <Aux>
        <h4>Level {this.state.userLevel}</h4>
        <progress max="100" value="0" className="leveling-progress-bar" />
        {this.averageScore(this.props.data.score, this.props.data.average)}
        {this.bestScore(this.props.data.score, this.props.data.best)}
        <p>{`You earned ${
          this.props.data.gainedExp
        } experience points from that round.`}</p>
        <button onClick={this.props.removeModal}>CLOSE</button>
      </Aux>
    );
  }
}

export default UserSummary;
