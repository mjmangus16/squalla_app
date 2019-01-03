import React, { Component } from "react";

class Scores extends Component {
  scoreToggle = e => {
    e.target.parentElement.firstChild.style.color = "var(--orange)";
  };

  render() {
    let scoresContent = [];
    scoresContent.push(
      this.props.data.map(player => (
        <div
          className="app-submitRound-players-score"
          key={this.props.data.indexOf(player)}
        >
          <p>{player}</p>
          <input
            className="submitRound-score"
            type="text"
            placeholder="Score"
            onChange={this.scoreToggle}
          />
        </div>
      ))
    );

    return (
      <div className="app-submitRound-submit-content-scores">
        <div className="app-submitRound-submit-content-scores-heading-container">
          <h3 className="app-submitRound-submit-content-course-h3">
            Enter the score for each player
          </h3>
        </div>
        <div className="app-submitRound-submit-content-courses-container">
          <div
            className="app-submitRound-submit-content-courses"
            id="submitRound-scores-container"
          >
            {scoresContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Scores;
