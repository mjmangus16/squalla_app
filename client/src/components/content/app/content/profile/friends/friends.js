import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../../../../actions/profileActions";

import selectArrow from "../../../../../../img/selectArrow.png";

import SelectedFriend from "./selectedFriend";

import AppMenu from "../../../appMenu";
import NavButtons from "../../../navButtons";

import "./friends.css";

class Friends extends Component {
  state = {
    friendSelected: false,
    selectedFriend: {}
  };

  componentDidMount() {
    this.props.getProfile();
  }

  selectFriendHandler = e => {
    console.log("clicked");
    if (this.state.friendSelected === false) {
      let username = e.target.parentElement.firstChild.firstChild.textContent;
      axios.get(`/api/profiles/friends/name/${username}`).then(res => {
        console.log(res.data);
        this.setState({ selectedFriend: res.data, friendSelected: true });
      });
    } else {
      this.setState({ friendSelected: false });
    }
  };

  render() {
    const { profile } = this.props.profile;
    let friendsContent = [];
    let displayContent;
    if (Object.keys(profile).length > 0) {
      let friendsData = profile.friends;

      friendsContent.push(
        friendsData.map(friend => (
          <div className="app-friends-friend" key={friendsData.indexOf(friend)}>
            <div className="app-friends-friend-data">
              <p className="app-friends-friend-username">{friend}</p>
            </div>
            <input
              type="image"
              src={selectArrow}
              className="app-friends-selectArrow"
              alt="expand course item icon"
              onClick={this.selectFriendHandler}
            />
          </div>
        ))
      );
      if (this.state.friendSelected === false) {
        displayContent = (
          <div className="app-home-friends-content">
            <div className="app-home-courses-heading">
              <div className="app-home-courses-heading-total">
                <h2>
                  Total Friends: <span>{profile.friends.length}</span>
                </h2>
              </div>
              <input id="course-search" type="text" placeholder="Search..." />
            </div>
            <div className="app-home-friends-data-container">
              {friendsData.length === 0 ? (
                <p>You have not added any friends yet</p>
              ) : (
                friendsContent
              )}
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
    }

    let navButtonLinks = [
      "/squallaApp/profile/friends",
      "/squallaApp/profile/friends/add"
    ];
    let navButtonNames = ["Friends", "Add Friend"];

    return (
      <div className="squalla-app-container">
        <AppMenu link={"friends"} />
        <div className="squalla-app-content-container">
          {displayContent}
          <NavButtons
            buttons={2}
            selected={1}
            links={navButtonLinks}
            names={navButtonNames}
          />
        </div>
      </div>
    );
  }
}

Friends.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Friends);
