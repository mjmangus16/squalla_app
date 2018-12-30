import React, { Component } from "react";

class Players extends Component {
  searchByNameHandler = () => {
    let input = document.getElementById("submitRound-player-search");
    let filter = input.value.toUpperCase();
    let players = document.querySelectorAll(".app-submitRound-players-player");

    for (let i = 0; i < players.length; i++) {
      let name = players[i].firstChild.textContent;
      if (name.toUpperCase().indexOf(filter) > -1) {
        players[i].style.display = "";
      } else {
        players[i].style.display = "none";
      }
    }
  };
  render() {
    let friendsContent = [];

    friendsContent.push(
      this.props.data.map(player => (
        <div
          className="app-submitRound-players-player"
          key={this.props.data.indexOf(player)}
        >
          <p>{player}</p>
          <button onClick={this.props.getHandler}>Select</button>
          <button onClick={this.props.removeHandler}>Remove</button>
        </div>
      ))
    );
    return (
      <div className="app-submitRound-submit-content-course">
        <div>
          <h3 className="app-submitRound-submit-content-course-h3">
            Select the players involved in the round
          </h3>
          <input
            id="submitRound-player-search"
            type="text"
            placeholder="Search..."
            onChange={this.searchByNameHandler}
          />
        </div>
        <div className="app-submitRound-submit-content-courses-container">
          <div className="app-submitRound-submit-content-courses">
            <div className="app-submitRound-players-player">
              <p>{this.props.user}</p>
              <button onClick={this.props.getHandler}>Select</button>
              <button onClick={this.props.removeHandler}>Remove</button>
            </div>
            {friendsContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Players;
