import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import selectArrow from "../../../../../../img/selectArrow.png";

import SelectedFriend from "./selectedFriend";

import AppMenu from "../../../appMenu";

import "../profile.css";

class Friends extends Component {
  state = {
    friendSelected: false,
    friends: [],
    selectedFriend: {}
  };

  componentDidMount() {
    axios.get("/api/profiles/friends/all").then(res => {
      if (res.data) {
        console.log(res.data);
        this.setState({
          friends: res.data.map(friend => (
            <div className="app-friends-friend">
              <div className="app-friends-friend-data">
                <p className="app-friends-friend-lvl">(lvl: {friend.level})</p>
                <p className="app-friends-friend-username">{friend.username}</p>
              </div>
              <input
                type="image"
                src={selectArrow}
                className="app-courses-course-selectArrow"
                alt="expand course item icon"
                onClick={this.selectFriendHandler}
              />
            </div>
          ))
        });
      }
    });
  }

  selectFriendHandler = e => {
    if (this.state.friendSelected === false) {
      let username = e.target.parentElement.firstChild.children[1].textContent;
      axios.get(`/api/profiles/friends/name/${username}`).then(res => {
        console.log(res.data);
        this.setState({ selectedFriend: res.data, friendSelected: true });
      });
    } else {
      this.setState({ friendSelected: true });
    }
  };

  render() {
    let displayContent;

    if (this.state.friendSelected === false) {
      displayContent = (
        <div className="app-home-friends-content">
          <div className="app-home-courses-heading">
            <div className="app-home-courses-heading-total">
              <h2>
                Total Friends: <span>{this.state.friends.length}</span>
              </h2>
            </div>
            <input id="course-search" type="text" placeholder="Search..." />
          </div>
          <div className="app-home-courses-data-container">
            {this.state.friends}
          </div>
        </div>
      );
    } else {
      displayContent = (
        <SelectedFriend
          handler={this.selectFriendHandler}
          data={this.state.selectedFriend}
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
