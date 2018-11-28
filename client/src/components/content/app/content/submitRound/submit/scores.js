import React from "react";

const scores = () => {
  let friend = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player1</p>
        <input id="submitRound-score" type="text" placeholder="Score" />
      </div>
    </div>
  );

  let friend2 = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player2</p>
        <input id="submitRound-score" type="text" placeholder="Score" />
      </div>
    </div>
  );

  let friends = [friend2, friend, friend2];

  return (
    <div className="app-submitRound-submit-content-scores">
      <h3 className="app-submitRound-submit-content-course-h3">
        Enter the scores for the round
      </h3>
      <div className="app-submitRound-submit-content-courses-container">
        <div className="app-submitRound-submit-content-courses">{friends}</div>
      </div>
    </div>
  );
};

export default scores;
