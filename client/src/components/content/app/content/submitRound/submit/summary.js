import React from "react";

const summary = () => {
  let friend = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player1</p>
        <p>64</p>
      </div>
    </div>
  );

  let friend2 = (
    <div className="app-submitRound-players-score">
      <div>
        <p>Player2</p>
        <p>64</p>
      </div>
    </div>
  );

  let friends = [friend2, friend, friend2];

  return (
    <div className="app-submitRound-submit-content-summary">
      <p>Joseph Davis State Park</p>
      <p>
        <span>Date:</span> 10/25/18
      </p>

      <p>
        <span>Tees:</span> White
      </p>
      <div>{friends}</div>
    </div>
  );
};

export default summary;
