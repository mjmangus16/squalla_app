import React, { Component } from "react";

class Scores extends Component {
  friend = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player1</p>
        <input id="submitRound-score" type="text" placeholder="Score" />
      </div>
    </div>
  );

  friend2 = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player2</p>
        <input id="submitRound-score" type="text" placeholder="Score" />
      </div>
    </div>
  );

  render() {
    let scoresContent = [];
    scoresContent.push(
      this.props.data.map(player => (
        <div
          className="app-submitRound-players-score"
          key={this.props.data.indexOf(player)}
        >
          <div>
            <p>{player}</p>
            <input
              className="submitRound-score"
              type="text"
              placeholder="Score"
            />
          </div>
        </div>
      ))
    );

    return (
      <div className="app-submitRound-submit-content-scores">
        <h3 className="app-submitRound-submit-content-course-h3">
          Enter the scores for the round
        </h3>
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
