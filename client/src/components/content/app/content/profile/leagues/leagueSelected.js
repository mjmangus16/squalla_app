import React, { Component } from "react";
import axios from "axios";

import selectArrowBack from "../../../../../../img/selectArrowBack.png";

class LeagueSelected extends Component {
  state = {
    leagueData: []
  };
  componentDidMount() {
    axios.get(`/api/leagues/name/${this.props.data.name}`).then(res => {
      if (res) {
        this.setState({
          leagueData: (
            <div className="league-selected-player-data-container">
              <div className="league-selected-player-data-container-heading">
                <h4 className="league-selected-player-data-container-heading-username">
                  Username
                </h4>
                <h4>Tag</h4>
              </div>
              <div className="league-selected-player-data-container-content">
                {res.data.rosterData.map(player => (
                  <div
                    className="league-selected-player-data-container-content-player"
                    key={res.data.rosterData.indexOf(player)}
                  >
                    <p className="league-selected-player-data-container-heading-username">
                      {player.username}
                    </p>
                    <p>{player.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        });
      }
    });
  }
  render() {
    let displayContent = (
      <div className="selected-league-container">
        <input
          type="image"
          src={selectArrowBack}
          className="app-leagues-league-backArrow"
          alt="expand course item icon"
          onClick={this.props.handler}
        />
        <div className="selected-league-content">
          <h2 className="selected-league-container-name">
            {this.props.data.name}
          </h2>
          <p className="selected-league-container-type">
            Type: {this.props.data.type}
          </p>
          <p className="selected-league-container-avail">
            {this.props.data.availability}
          </p>

          {this.state.leagueData}
        </div>
      </div>
    );

    return displayContent;
  }
}

export default LeagueSelected;
