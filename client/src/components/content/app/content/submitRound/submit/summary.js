import React from "react";
import Moment from "react-moment";

const summary = props => {
  const displayScores = () => {
    let playerScores = [];
    for (let i = 0; i < props.data.players.length; i++) {
      playerScores.push({
        player: props.data.players[i],
        score: props.data.scores[i]
      });
    }
    return playerScores;
  };

  return (
    <div className="app-submitRound-submit-content-summary">
      <p className="app-submitRound-submit-content-summary-p">
        {props.data.course}
      </p>
      <p className="app-submitRound-submit-content-summary-p">
        <span>Date:</span> <Moment format="MM/DD/YY">{props.data.date}</Moment>
      </p>

      <p className="app-submitRound-submit-content-summary-p">
        <span>Tees:</span> {props.data.tees}
      </p>
      <div className="app-submitRound-submit-content-summary-scores">
        {displayScores().map(score => (
          <div
            className="app-submitRound-players-scores"
            key={`${score.player}${score.score}`}
          >
            <div className="app-submitRound-players-scores-content">
              <p id="app-submitRound-players-scores-content-player">
                {score.player}
              </p>
              <p>{score.score}</p>
            </div>
          </div>
        ))}
      </div>

      <button id="submitRound-submitButton" onClick={props.handler}>
        SUBMIT ROUND
      </button>
      <p id="round-submitted-success">Your round was successfully submitted</p>
    </div>
  );
};

export default summary;
