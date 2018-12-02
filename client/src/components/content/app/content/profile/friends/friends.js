import React, { Component } from "react";
import { Link } from "react-router-dom";

import selectArrow from "../../../../../../img/selectArrow.png";

import SelectedFriend from "./selectedFriend";

import AppMenu from "../../../appMenu";

import "../profile.css";

class Friends extends Component {
  state = {
    friendSelected: false
  };

  selectedFriendData = {
    friend: ""
  };

  selectFriendHandler = e => {
    this.setState({ friendSelected: !this.state.friendSelected });
    console.log(e.target.parentElement.firstChild.textContent);
    this.selectedFriendData.friend =
      e.target.parentElement.firstChild.textContent;
  };

  friend = (
    <div className="app-friends-friend">
      <p>Player1</p>
      <input
        type="image"
        src={selectArrow}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={this.selectFriendHandler}
      />
    </div>
  );

  friend2 = (
    <div className="app-friends-friend">
      <p>Player2</p>
      <input
        type="image"
        src={selectArrow}
        className="app-courses-course-selectArrow"
        alt="expand course item icon"
        onClick={this.selectFriendHandler}
      />
    </div>
  );

  friends = [
    this.friend2,
    this.friend,
    this.friend2,
    this.friend,
    this.friend2,
    this.friend,
    this.friend2,
    this.friend2,
    this.friend,
    this.friend2,
    this.friend,
    this.friend2,
    this.friend,
    this.friend2
  ];

  render() {
    let displayContent;

    if (this.state.friendSelected === false) {
      displayContent = (
        <div className="app-home-friends-content">
          <div className="app-home-courses-heading">
            <div className="app-home-courses-heading-total">
              <h2>
                Total Friends: <span>12</span>
              </h2>
            </div>
            <input id="course-search" type="text" placeholder="Search..." />
          </div>
          <div className="app-home-courses-data-container">{this.friends}</div>
        </div>
      );
    } else {
      displayContent = (
        <SelectedFriend
          handler={this.selectFriendHandler}
          data={this.selectedFriendData}
        />
      );
    }

    return (
      <div className="squalla-app-container">
        <AppMenu link={"friends"} />
        <div className="squalla-app-content-container">
          {displayContent}
          <div className="app-home-courses-nav">
            <Link to="/squallaApp/profile/friends" exact="true">
              <button
                className="app-home-nav-button"
                id="app-home-nav-selected"
              >
                Friends
              </button>
            </Link>

            <Link to="/squallaApp/profile/friends/add" exact="true">
              <button className="app-home-nav-right">Add Friend</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
