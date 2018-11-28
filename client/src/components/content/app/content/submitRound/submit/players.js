import React from "react";

const players = () => {
  let friend = (
    <div className="app-submitRound-players-player">
      <p>Player1</p>
    </div>
  );

  let friend2 = (
    <div className="app-submitRound-players-player">
      <p>Player2</p>
    </div>
  );

  let friends = [friend2, friend, friend2, friend, friend2, friend, friend2];

  return (
    <div className="app-submitRound-submit-content-course">
      <div>
        <h3 className="app-submitRound-submit-content-course-h3">
          Select the players involved in the round
        </h3>
        <input
          id="submitRound-course-search"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="app-submitRound-submit-content-courses-container">
        <div className="app-submitRound-submit-content-courses">{friends}</div>
      </div>
    </div>
  );
};

export default players;
