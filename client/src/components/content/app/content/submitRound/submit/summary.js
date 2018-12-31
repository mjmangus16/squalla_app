import React from "react";

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
        <span>Date:</span> {props.data.date}
      </p>

      <p className="app-submitRound-submit-content-summary-p">
        <span>Tees:</span> {props.data.tees}
      </p>
      <div>
        {displayScores().map(score => (
          <div
            className="app-submitRound-players-score"
            key={displayScores().indexOf(score)}
          >
            <div>
              <p>{score.player}</p>
              <p>{score.score}</p>
            </div>
          </div>
        ))}
      </div>
      <button id="submitRound-submitButton" onClick={props.handler}>
        SUBMIT ROUND
      </button>
    </div>
  );
};

export default summary;
