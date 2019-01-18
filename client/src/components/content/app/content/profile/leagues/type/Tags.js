import React from "react";

const Tags = props => {
  return (
    <div className="league-selected-player-data-container">
      <div className="league-selected-player-data-container-heading">
        <h4 className="league-selected-player-data-container-heading-username">
          Username
        </h4>
        <h4>Tag</h4>
      </div>
      <div className="league-selected-player-data-container-content">
        {props.data.rosterData.map(player => (
          <div
            className="league-selected-player-data-container-content-player"
            key={props.data.rosterData.indexOf(player)}
          >
            <p className="league-selected-player-data-container-heading-username">
              {player.username}
            </p>
            <p>{player.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
