import React, { Component } from "react";

import Aux from "../../../../../UI/Aux";

class League extends Component {
  render() {
    let displayContent;
    if (this.props.data.length > 0) {
      displayContent = this.props.data.map(league => (
        <div
          className="app-submitRound-submit-content-league-league"
          key={this.props.data.indexOf(league)}
        >
          <button
            className="select-players-button"
            onClick={this.props.handler}
          >
            {league.name}
          </button>
        </div>
      ));
    } else {
      displayContent = (
        <h2 style={{ color: "var(--orange)", fontWeight: "300" }}>
          Once you join a league, it will show up here.
        </h2>
      );
    }

    return (
      <Aux>
        <div>
          <h3 className="app-submitRound-submit-content-course-h3">
            If this is a league match, select the league. Otherwise, select
            nothing and press next.
          </h3>
          <input
            id="submitRound-course-search"
            type="text"
            placeholder="Search..."
            onChange={this.searchByNameHandler}
          />
        </div>
        {displayContent}
      </Aux>
    );
  }
}

export default League;
