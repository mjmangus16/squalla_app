import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AppMenu from "../../../appMenu";

import "./friends.css";

class AddFriend extends Component {
  state = {
    friend: []
  };
  getFriend = () => {
    const username = document.getElementById("add-friend-search").value;

    if (username) {
      axios
        .get(`/api/profiles/friends/name/${username}`)
        .then(res => {
          console.log(res.data);
          let user = res.data;
          this.setState({
            friend: (
              <div className="app-home-addfriend-friend">
                <h3>{user.username}</h3>
                <button>Add Friend</button>
              </div>
            )
          });
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div className="squalla-app-container">
        <AppMenu link={"friends"} />
        <div className="squalla-app-content-container">
          <div className="app-home-friends-content">
            <div className="add-friend-search-container">
              <input
                id="add-friend-search"
                type="text"
                placeholder="Username..."
              />
              <button id="add-friend-submit" onClick={this.getFriend}>
                Search
              </button>
            </div>

            <div className="app-home-addFriend-container">
              {this.state.friend}
            </div>
          </div>
          <div className="app-home-courses-nav">
            <Link to="/squallaApp/profile/friends" exact="true">
              <button className="app-home-nav-button">Friends</button>
            </Link>

            <Link to="/squallaApp/profile/friends/add" exact="true">
              <button className="app-home-nav-right" id="app-home-nav-selected">
                Add Friend
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFriend;
