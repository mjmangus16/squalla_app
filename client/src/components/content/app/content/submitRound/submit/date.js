import React from "react";

const date = props => {
  return (
    <div className="app-submitRound-submit-content-date">
      <h3>Select the date the round was played</h3>
      <input type="date" id="submitRound-date" />
      <button onClick={props.handler}>Submit</button>
    </div>
  );
};

export default date;
