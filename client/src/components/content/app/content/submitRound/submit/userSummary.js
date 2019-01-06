import React, { Component } from "react";

import getExperiencePercent from "../../profile/home/functions/getExperiencePercent";

import Aux from "../../../../../UI/Aux";

class UserSummary extends Component {
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
    let elem = document.getElementById("app-home-dashboard-expBar-filler");

    let width = getExperiencePercent(
      this.props.data.originalExp,
      this.props.data.level
    );
    elem.style.width = width;
    let newWidth = getExperiencePercent(
      this.props.data.originalExp + this.props.data.gainedExp,
      this.props.data.level
    );
    console.log(width, newWidth);
    var id = setInterval(frame, 250);
    function frame() {
      if (width >= newWidth || width >= 100) {
        clearInterval(id);
      } else {
        width++;
        console.log(width + "%");
        elem.style.width = width + "%";
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
        <h4>Level {this.props.data.level}</h4>
        <div className="app-home-dashboard-expBar-container">
          <div
            className="app-home-dashboard-expBar-filler"
            id="app-home-dashboard-expBar-filler"
            // style={{ width: expBarStyle }}
          />
        </div>
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
